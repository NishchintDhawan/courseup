import { ChakraProvider } from '@chakra-ui/react';
import { UserProvider } from '@supabase/supabase-auth-helpers/react';
import type { AppProps /*, AppContext */ } from 'next/app';
import { InstantSearch } from 'react-instantsearch-core';
import { RestfulProvider } from 'restful-react';
import { ApolloProvider } from '@apollo/client'

import { customTheme } from '../src/lib/theme';
import { searchClient } from '../src/lib/algoliaClient';


import { supabase } from '../utils/supabaseClient';
import { apolloClient } from '../utils/apolloClient';

// TODO: deprecate off banner 8 backend
const API_URL = 'https://courseup.vikelabs.dev/api';
// TODO: deprecate off "undocumented" algolia index
const ALGOLIA_INDEX_NAME = 'dev_uvic';

// TODO: extend Supabase UserProvider (allow things like useUser() into course crud actions)

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <UserProvider supabaseClient={supabase}>
      <ChakraProvider theme={customTheme}>
        <InstantSearch searchClient={searchClient} indexName={ALGOLIA_INDEX_NAME}>
          <ApolloProvider client={apolloClient}>
            <RestfulProvider base={API_URL}>
              <Component {...pageProps} />
            </RestfulProvider>
          </ApolloProvider>
        </InstantSearch>
      </ChakraProvider>
    </UserProvider>
  );
}
export default App;
