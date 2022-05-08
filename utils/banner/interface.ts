export interface Section {
    id: number;
    term: string;
    termDesc: TermDesc;
    courseReferenceNumber: string;
    partOfTerm: null | string;
    courseNumber: string;
    subject: Subject;
    subjectDescription: SubjectDescription;
    sequenceNumber: SequenceNumber;
    campusDescription: CampusDescription;
    scheduleTypeDescription: ScheduleTypeDescription;
    courseTitle: string;
    creditHours: number | null;
    maximumEnrollment: number;
    enrollment: number;
    seatsAvailable: number;
    waitCapacity: number | null;
    waitCount: number;
    waitAvailable: number | null;
    crossList: null | string;
    crossListCapacity: number | null;
    crossListCount: number | null;
    crossListAvailable: number | null;
    creditHourHigh: number | null;
    creditHourLow: number;
    creditHourIndicator: CreditHourIndicator | null;
    openSection: boolean;
    linkIdentifier: LinkIdentifier | null;
    isSectionLinked: boolean;
    subjectCourse: string;
    faculty: Faculty[];
    meetingsFaculty: MeetingsFaculty[];
    reservedSeatSummary: null;
    sectionAttributes: null;
    instructionalMethod: InstructionalMethod | null;
    instructionalMethodDescription: InstructionalMethodDescription | null;
}

export enum CampusDescription {
    AbbotsfordBC = "Abbotsford, BC",
    AuroraCollege = "Aurora College",
    BamfieldBC = "Bamfield, BC",
    CampbellRiverBC = "Campbell River, BC",
    CastlegarBC = "Castlegar, BC",
    CollegeOfTheRockies = "College of the Rockies",
    ComoxBC = "Comox, BC",
    CranbrookBC = "Cranbrook, BC",
    DeltaBC = "Delta, BC",
    Greece = "Greece",
    HongKong = "Hong Kong",
    LakeCowichan = "Lake Cowichan",
    LimerickIreland = "Limerick, Ireland",
    Main = "Main",
    Malaysia = "Malaysia",
    NanaimoBC = "Nanaimo, BC",
    NorthwestTerritories = "Northwest Territories",
    OffCampus = "Off Campus",
    Online = "Online",
    ParksvilleBC = "Parksville, BC",
    Pathways = "Pathways",
    PentictonBC = "Penticton, BC",
    PortHardy = "Port Hardy",
    SelkirkCollegeBC = "Selkirk College, BC",
    Singapore = "Singapore",
    SydneyAustralia = "Sydney, Australia",
    UniversityOfBritishColumbia = "University of British Columbia",
    Utrecht = "Utrecht",
    VancouverBC = "Vancouver, BC",
    VictoriaBC = "Victoria, BC",
    VrijeAmsterdam = "Vrije, Amsterdam",
    W39SANECSaanich = "W&#39;SANEC (Saanich)",
    WellingtonNewZealand = "Wellington, New Zealand",
}

export enum CreditHourIndicator {
    Or = "OR",
    To = "TO",
}

export interface Faculty {
    bannerId: string;
    category: null;
    class: FacultyClass;
    courseReferenceNumber: string;
    displayName: string;
    emailAddress: null | string;
    primaryIndicator: boolean;
    term: string;
}

export enum FacultyClass {
    NetHedtechBannerStudentFacultyFacultyResultDecorator = "net.hedtech.banner.student.faculty.FacultyResultDecorator",
}

export enum InstructionalMethod {
    Exp = "EXP",
    F2F = "F2F",
    F2Fol = "F2FOL",
    Field = "FIELD",
    Ol = "OL",
    Olf2F = "OLF2F",
}

export enum InstructionalMethodDescription {
    CourseWithFieldComponent = "Course with Field Component",
    FaceToFace = "Face-to-face",
    FaceToFaceWithSomeOnline = "Face-to-face with some Online",
    FullyOnline = "Fully Online",
    OnlineWithSomeFaceToFace = "Online with some face-to-face",
    WorkTermAndExchangeCourses = "Work Term and Exchange Courses",
}

export enum LinkIdentifier {
    A0 = "A0",
    A1 = "A1",
    A2 = "A2",
    A3 = "A3",
    A4 = "A4",
    A5 = "A5",
    A6 = "A6",
    A7 = "A7",
    A8 = "A8",
    B1 = "B1",
    B2 = "B2",
    B3 = "B3",
    B4 = "B4",
    T0 = "T0",
    T1 = "T1",
    T2 = "T2",
    T3 = "T3",
    T4 = "T4",
    T5 = "T5",
    T6 = "T6",
    T7 = "T7",
    T8 = "T8",
}

export interface MeetingsFaculty {
    category: string;
    class: MeetingsFacultyClass;
    courseReferenceNumber: string;
    faculty: any[];
    meetingTime: MeetingTime;
    term: string;
}

export enum MeetingsFacultyClass {
    NetHedtechBannerStudentScheduleSectionSessionDecorator = "net.hedtech.banner.student.schedule.SectionSessionDecorator",
}

export interface MeetingTime {
    beginTime: null | string;
    building: null | string;
    buildingDescription: BuildingDescription | null;
    campus: Campus | null;
    campusDescription: CampusDescription | null;
    category: string;
    class: MeetingTimeClass;
    courseReferenceNumber: string;
    creditHourSession: number | null;
    endDate: string;
    endTime: null | string;
    friday: boolean;
    hoursWeek: number | null;
    meetingScheduleType: MeetingScheduleType;
    meetingType: string;
    meetingTypeDescription: MeetingTypeDescription;
    monday: boolean;
    room: null | string;
    saturday: boolean;
    startDate: string;
    sunday: boolean;
    term: string;
    thursday: boolean;
    tuesday: boolean;
    wednesday: boolean;
}

export enum BuildingDescription {
    BobWrightCentre = "Bob Wright Centre",
    BusinessAmpEconomicsBuilding = "Business &amp; Economics Building",
    CadboroCommons = "Cadboro Commons",
    Carsa = "CARSA",
    ClearihueBuilding = "Clearihue Building",
    ContinuingStudiesBuilding = "Continuing Studies Building",
    CornettBuilding = "Cornett Building",
    CunninghamBuilding = "Cunningham Building",
    DavidStrongBuilding = "David Strong Building",
    DavidTurpinBuilding = "David Turpin Building",
    ElliottBuilding = "Elliott Building",
    EngineeringCompScienceBldg = "Engineering Comp Science Bldg",
    EngineeringLabWing = "Engineering Lab Wing",
    Field = "Field",
    FineArtsBuilding = "Fine Arts Building",
    FirstPeoplesHouse = "First Peoples House",
    FraserBuilding = "Fraser Building",
    HickmanBuilding = "Hickman Building",
    HumanAmpSocialDevelopment = "Human &amp; Social Development",
    HutL = "Hut L",
    HutS = "Hut S",
    IanStewartComplex = "Ian Stewart Complex",
    JamieCasselsCentre = "Jamie Cassels Centre",
    MACLaurinBuilding = "MacLaurin Building",
    McKinnonBuilding = "McKinnon Building",
    McPhersonLibrary = "McPherson Library",
    MedicalSciencesBuilding = "Medical Sciences Building",
    PetchBuilding = "Petch Building",
    PhoenixTheatre = "Phoenix Theatre",
    Stadium = "Stadium",
    StudentUnionBuilding = "Student Union Building",
    TechnicalEnterpriseFacility = "Technical Enterprise Facility",
    VisualArtsBuilding = "Visual Arts Building",
}

export enum Campus {
    M = "M",
}

export enum MeetingTimeClass {
    NetHedtechBannerGeneralOverallMeetingTimeDecorator = "net.hedtech.banner.general.overall.MeetingTimeDecorator",
}

export enum MeetingScheduleType {
    Dsc = "DSC",
    Glb = "GLB",
    Int = "INT",
    Iss = "ISS",
    L01 = "L01",
    L02 = "L02",
    L03 = "L03",
    L04 = "L04",
    L05 = "L05",
    L06 = "L06",
    L07 = "L07",
    L08 = "L08",
    L09 = "L09",
    L10 = "L10",
    L11 = "L11",
    L12 = "L12",
    L13 = "L13",
    L14 = "L14",
    L15 = "L15",
    Lab = "LAB",
    Lec = "LEC",
    Pra = "PRA",
    Tut = "TUT",
    Wch = "WCH",
}

export enum MeetingTypeDescription {
    Empty = ".",
    EverySecondWeek = "Every Second Week",
    EveryThirdWeek = "Every Third Week",
    EveryWeek = "Every Week",
    Lab = "Lab",
    MeetsOnline = "Meets Online",
    MidtermExam = "Midterm Exam",
}

export enum ScheduleTypeDescription {
    Discussion = "Discussion",
    GradableLab = "Gradable Lab",
    IndividuallySupervisedStudy = "Individually Supervised Study",
    Internship = "Internship",
    Lab = "Lab",
    Lecture = "Lecture",
    LectureTopic = "Lecture Topic",
    Practicum = "Practicum",
    Tutorial = "Tutorial",
    WorkTerm = "Work Term",
    WorkTermChallenge = "Work Term Challenge",
}

export enum SequenceNumber {
    A = "A",
    A01 = "A01",
    A02 = "A02",
    A03 = "A03",
    A04 = "A04",
    A05 = "A05",
    A06 = "A06",
    A07 = "A07",
    A08 = "A08",
    A09 = "A09",
    A10 = "A10",
    A11 = "A11",
    A12 = "A12",
    A13 = "A13",
    A14 = "A14",
    A15 = "A15",
    A16 = "A16",
    A17 = "A17",
    A18 = "A18",
    A19 = "A19",
    A20 = "A20",
    A21 = "A21",
    A22 = "A22",
    A23 = "A23",
    A24 = "A24",
    A25 = "A25",
    A26 = "A26",
    A27 = "A27",
    A28 = "A28",
    A29 = "A29",
    A30 = "A30",
    A31 = "A31",
    A32 = "A32",
    A33 = "A33",
    A34 = "A34",
    A35 = "A35",
    A36 = "A36",
    A37 = "A37",
    A38 = "A38",
    A39 = "A39",
    A40 = "A40",
    A41 = "A41",
    A42 = "A42",
    A43 = "A43",
    A44 = "A44",
    A45 = "A45",
    A46 = "A46",
    A47 = "A47",
    A48 = "A48",
    B01 = "B01",
    B02 = "B02",
    B03 = "B03",
    B04 = "B04",
    B05 = "B05",
    B06 = "B06",
    B07 = "B07",
    B08 = "B08",
    B09 = "B09",
    B10 = "B10",
    B11 = "B11",
    B12 = "B12",
    B13 = "B13",
    B14 = "B14",
    B15 = "B15",
    B16 = "B16",
    B17 = "B17",
    B18 = "B18",
    B19 = "B19",
    B20 = "B20",
    B21 = "B21",
    B22 = "B22",
    B23 = "B23",
    B24 = "B24",
    B25 = "B25",
    B26 = "B26",
    B27 = "B27",
    B28 = "B28",
    B29 = "B29",
    B30 = "B30",
    B31 = "B31",
    B32 = "B32",
    B33 = "B33",
    B34 = "B34",
    B35 = "B35",
    B36 = "B36",
    B37 = "B37",
    B38 = "B38",
    B39 = "B39",
    B40 = "B40",
    B41 = "B41",
    B42 = "B42",
    B43 = "B43",
    B44 = "B44",
    B45 = "B45",
    B46 = "B46",
    B47 = "B47",
    B48 = "B48",
    B49 = "B49",
    B50 = "B50",
    B51 = "B51",
    B52 = "B52",
    B53 = "B53",
    B54 = "B54",
    B55 = "B55",
    B56 = "B56",
    B59 = "B59",
    B60 = "B60",
    B61 = "B61",
    B62 = "B62",
    B63 = "B63",
    B66 = "B66",
    B67 = "B67",
    B68 = "B68",
    B69 = "B69",
    B70 = "B70",
    B71 = "B71",
    B72 = "B72",
    B73 = "B73",
    B74 = "B74",
    B75 = "B75",
    B76 = "B76",
    C01 = "C01",
    D01 = "D01",
    I01 = "I01",
    T01 = "T01",
    T02 = "T02",
    T03 = "T03",
    T04 = "T04",
    T05 = "T05",
    T06 = "T06",
    T07 = "T07",
    T08 = "T08",
    T09 = "T09",
    T10 = "T10",
    T11 = "T11",
    T12 = "T12",
    T13 = "T13",
    T14 = "T14",
    T15 = "T15",
    T16 = "T16",
    T17 = "T17",
    T18 = "T18",
    T19 = "T19",
    T20 = "T20",
    T21 = "T21",
    T22 = "T22",
    T23 = "T23",
    T24 = "T24",
    T25 = "T25",
    T26 = "T26",
    T27 = "T27",
    T28 = "T28",
    T29 = "T29",
    T30 = "T30",
    T31 = "T31",
    T32 = "T32",
    T33 = "T33",
    T34 = "T34",
    T35 = "T35",
    T36 = "T36",
    T37 = "T37",
    T38 = "T38",
    T39 = "T39",
    T40 = "T40",
    T42 = "T42",
    T43 = "T43",
    W01 = "W01",
    W02 = "W02",
    W03 = "W03",
    W04 = "W04",
}

export enum Subject {
    AE = "AE",
    Acan = "ACAN",
    Admn = "ADMN",
    Agei = "AGEI",
    Ahvs = "AHVS",
    Anth = "ANTH",
    Art = "ART",
    Asl = "ASL",
    Astr = "ASTR",
    Atwp = "ATWP",
    Bcmb = "BCMB",
    Bioc = "BIOC",
    Biol = "BIOL",
    Bme = "BME",
    Bus = "BUS",
    CD = "CD",
    COM = "COM",
    CS = "CS",
    Ceng = "CENG",
    Ch = "CH",
    Chem = "CHEM",
    Chin = "CHIN",
    Cive = "CIVE",
    Csc = "CSC",
    Cspt = "CSPT",
    Cw = "CW",
    Cyc = "CYC",
    Cyci = "CYCI",
    DR = "DR",
    Dhum = "DHUM",
    Dsst = "DSST",
    EOS = "EOS",
    Ece = "ECE",
    Econ = "ECON",
    EdD = "ED-D",
    EdP = "ED-P",
    Edci = "EDCI",
    Educ = "EDUC",
    Elec = "ELEC",
    Engl = "ENGL",
    Engr = "ENGR",
    Ent = "ENT",
    Entc = "ENTC",
    Entd = "ENTD",
    Ephe = "EPHE",
    Er = "ER",
    Es = "ES",
    Eus = "EUS",
    Fa = "FA",
    Forb = "FORB",
    Fran = "FRAN",
    Fren = "FREN",
    Gds = "GDS",
    Geog = "GEOG",
    Ger = "GER",
    Gers = "GERS",
    Gmst = "GMST",
    Gndr = "GNDR",
    Gree = "GREE",
    Grs = "GRS",
    Gs = "GS",
    HSM = "HSM",
    Ha = "HA",
    Hdcc = "HDCC",
    Hinf = "HINF",
    Hist = "HIST",
    Hlth = "HLTH",
    Hs = "HS",
    Hsd = "HSD",
    Hstr = "HSTR",
    Huma = "HUMA",
    ISP = "ISP",
    Ib = "IB",
    Icdg = "ICDG",
    Ied = "IED",
    Iet = "IET",
    Igov = "IGOV",
    In = "IN",
    Ingh = "INGH",
    Intd = "INTD",
    Ints = "INTS",
    Is = "IS",
    Ital = "ITAL",
    Japa = "JAPA",
    Las = "LAS",
    Lati = "LATI",
    Law = "LAW",
    Ling = "LING",
    MICR = "MICR",
    Math = "MATH",
    Mba = "MBA",
    Me = "ME",
    Mech = "MECH",
    Medi = "MEDI",
    Meds = "MEDS",
    Mest = "MEST",
    Mgb = "MGB",
    Mm = "MM",
    Mrne = "MRNE",
    Mus = "MUS",
    Nrsc = "NRSC",
    Nued = "NUED",
    Nuhi = "NUHI",
    Nunp = "NUNP",
    Nura = "NURA",
    Nurp = "NURP",
    Nurs = "NURS",
    Paas = "PAAS",
    Paci = "PACI",
    Padr = "PADR",
    Phil = "PHIL",
    Phsp = "PHSP",
    Phys = "PHYS",
    Poli = "POLI",
    Psyc = "PSYC",
    RCS = "RCS",
    Rhed = "RHED",
    Rs = "RS",
    Russ = "RUSS",
    SDH = "SDH",
    Scie = "SCIE",
    Sea = "SEA",
    Seng = "SENG",
    Sjs = "SJS",
    Slav = "SLAV",
    Slst = "SLST",
    Smgt = "SMGT",
    Soci = "SOCI",
    Socw = "SOCW",
    Sosc = "SOSC",
    Span = "SPAN",
    Spp = "SPP",
    Stat = "STAT",
    Thea = "THEA",
    Ts = "TS",
    Ukr = "UKR",
    Wkex = "WKEX",
    Writ = "WRIT",
    Ws = "WS",
}

export enum SubjectDescription {
    AcademicAndTechnicalWriting = "Academic and Technical Writing",
    Ageing = "Ageing",
    AmericanSignLanguage = "American Sign Language",
    Anthropology = "Anthropology",
    Art = "Art",
    ArtEducation = "Art Education",
    ArtHistoryAmpVisualStudies = "Art History &amp; Visual Studies",
    ArtsOfCanada = "Arts of Canada",
    Astronomy = "Astronomy",
    Biochemistry = "Biochemistry",
    BiochemistryAndMicrobiology = "Biochemistry and Microbiology",
    Biology = "Biology",
    BiomedicalEngineering = "Biomedical Engineering",
    Business = "Business",
    CanadianStudies = "Canadian Studies",
    Chemistry = "Chemistry",
    ChildAmpYouthCareInternatnl = "Child &amp; Youth Care Internatnl",
    ChildAndYouthCare = "Child and Youth Care",
    Chinese = "Chinese",
    CivilEngineering = "Civil Engineering",
    Commerce = "Commerce",
    CommunityDevelopment = "Community Development",
    ComputerEngineering = "Computer Engineering",
    ComputerScience = "Computer Science",
    CreativeWriting = "Creative Writing",
    CulturalHeritage = "Cultural Heritage",
    CulturalSocialAmpPoliticalT = "Cultural, Social &amp; Political T",
    CurriculumAndInstruction = "Curriculum and Instruction",
    DigitalHumanities = "Digital Humanities",
    DisabilityStudies = "Disability Studies",
    DisputeResolution = "Dispute Resolution",
    EarthAndOceanSciences = "Earth and Ocean Sciences",
    Economics = "Economics",
    EdPsycAndLeadershipStudies = "Ed Psyc and Leadership Studies",
    Education = "Education",
    ElectricalAmpComputerEngineer = "Electrical &amp; Computer Engineer",
    ElectricalEngineering = "Electrical Engineering",
    Engineering = "Engineering",
    English = "English",
    EntrepreneurshipAndSmallBus = "Entrepreneurship and Small Bus",
    EntrepreneurshipCertificate = "Entrepreneurship Certificate",
    EntrepreneurshipDiploma = "Entrepreneurship Diploma",
    EnvironmentalRestoration = "Environmental Restoration",
    EnvironmentalStudies = "Environmental Studies",
    EuropeanStudies = "European Studies",
    ExerciseScPhysAmpHealthEd = "Exercise Sc, Phys &amp; Health Ed",
    FineArts = "Fine Arts",
    ForestBiology = "Forest Biology",
    FrenchFRAN = "French (FRAN)",
    FrenchFREN = "French (FREN)",
    GenderStudies = "Gender Studies",
    Geography = "Geography",
    German = "German",
    GermanicStudies = "Germanic Studies",
    GlobalDevelopmentStudies = "Global Development Studies",
    GraduateStudies = "Graduate Studies",
    Greek = "Greek",
    GreekAndRomanStudies = "Greek and Roman Studies",
    HealthAndCommunityServices = "Health and Community Services",
    HealthAndSociety = "Health and Society",
    HealthInformationScience = "Health Information Science",
    History = "History",
    HistoryInArt = "History in Art",
    HospitalityAndServicesMgmt = "Hospitality and Services Mgmt",
    HumanAndSocialDevelopment = "Human and Social Development",
    HumanDimensionsClimateChg = "Human Dimensions - Climate Chg",
    Humanities = "Humanities",
    IndigenousCOMDevGovernance = "Indigenous Com Dev Governance",
    IndigenousEducation = "Indigenous Education",
    IndigenousGovernance = "Indigenous Governance",
    IndigenousNationhood = "Indigenous Nationhood",
    IndigenousPeoplesHealth = "Indigenous Peoples Health",
    IndigenousStudies = "Indigenous Studies",
    InterculturalEducationAndTr = "Intercultural Education and Tr",
    InterculturalStudiesAndPrac = "Intercultural Studies and Prac",
    Interdisciplinary = "Interdisciplinary",
    InternationalBusiness = "International Business",
    InternationalHealthStudies = "International Health Studies",
    Italian = "Italian",
    Japanese = "Japanese",
    Latin = "Latin",
    LatinAmericanStudies = "Latin American Studies",
    Law = "Law",
    Linguistics = "Linguistics",
    MarineScience = "Marine Science",
    MasterOfManagement = "Master of Management",
    MastersBusinessAdministratio = "Masters-Business Administratio",
    MastersOfGlobalBusiness = "Masters of Global Business",
    Math = "Math",
    MechanicalEngineering = "Mechanical Engineering",
    MedicalSciences = "Medical Sciences",
    MedievalStudies = "Medieval Studies",
    MediterraneanStudies = "Mediterranean Studies",
    Microbiology = "Microbiology",
    Music = "Music",
    MusicEducation = "Music Education",
    Neuroscience = "Neuroscience",
    NurseEducator = "Nurse Educator",
    Nursing = "Nursing",
    NursingAdvancedPractice = "Nursing Advanced Practice",
    NursingHealthInfoScience = "Nursing/Health Info Science",
    NursingPolicyAndPractice = "Nursing Policy and Practice",
    NursingPractitioners = "Nursing Practitioners",
    PacificAndAsianStudies = "Pacific and Asian Studies",
    PacificStudies = "Pacific Studies",
    Philosophy = "Philosophy",
    Physics = "Physics",
    PoliticalScience = "Political Science",
    Psychology = "Psychology",
    PublicAdministration = "Public Administration",
    PublicAdmnAmpDisputeResolutn = "Public Admn &amp; Dispute Resolutn",
    PublicHealthAmpSocialPolicy = "Public Health &amp; Social Policy",
    RecreationAndHealth = "Recreation and Health",
    ReligionCultureAndSociety = "Religion, Culture and Society",
    ReligiousStudies = "Religious Studies",
    Russian = "Russian",
    Science = "Science",
    ServiceManagement = "Service Management",
    SlavicStudies = "Slavic Studies",
    Slavonics = "Slavonics",
    SocialDimensionsOfHealth = "Social Dimensions of Health",
    SocialJusticeStudies = "Social Justice Studies",
    SocialSciences = "Social Sciences",
    SocialWork = "Social Work",
    Sociology = "Sociology",
    SoftwareEngineering = "Software Engineering",
    SoutheastAsia = "Southeast Asia",
    Spanish = "Spanish",
    Statistics = "Statistics",
    StudyInPolicyAndPractice = "Study in Policy and Practice",
    TeacherEdSeminarAmpPract = "Teacher Ed: Seminar &amp; Pract.",
    TechnologyAndSociety = "Technology and Society",
    Theatre = "Theatre",
    Ukrainian = "Ukrainian",
    WomensStudies = "Womens Studies",
    WorkExperience = "Work Experience",
    Writing = "Writing",
}

export enum TermDesc {
    FirstTermSepDEC2008 = "First Term: Sep - Dec 2008",
    FirstTermSepDEC2009 = "First Term: Sep - Dec 2009",
    FirstTermSepDEC2010 = "First Term: Sep - Dec 2010",
    FirstTermSepDEC2011 = "First Term: Sep - Dec 2011",
    FirstTermSepDEC2012 = "First Term: Sep - Dec 2012",
    FirstTermSepDEC2013 = "First Term: Sep - Dec 2013",
    FirstTermSepDEC2014 = "First Term: Sep - Dec 2014",
    FirstTermSepDEC2015 = "First Term: Sep - Dec 2015",
    FirstTermSepDEC2016 = "First Term: Sep - Dec 2016",
    FirstTermSepDEC2018 = "First Term: Sep - Dec 2018",
    FirstTermSepDEC2019 = "First Term: Sep - Dec 2019",
    FirstTermSepDEC2020 = "First Term: Sep - Dec 2020",
    FirstTermSepDEC2021 = "First Term: Sep - Dec 2021",
    SecondTermJanAPR2009 = "Second Term: Jan - Apr 2009",
    SecondTermJanAPR2010 = "Second Term: Jan - Apr 2010",
    SecondTermJanAPR2011 = "Second Term: Jan - Apr 2011",
    SecondTermJanAPR2012 = "Second Term: Jan - Apr 2012",
    SecondTermJanAPR2013 = "Second Term: Jan - Apr 2013",
    SecondTermJanAPR2014 = "Second Term: Jan - Apr 2014",
    SecondTermJanAPR2015 = "Second Term:  Jan - Apr 2015",
    SecondTermJanAPR2016 = "Second Term: Jan - Apr 2016",
    SecondTermJanAPR2017 = "Second Term: Jan - Apr 2017",
    SecondTermJanAPR2019 = "Second Term: Jan - Apr 2019",
    SecondTermJanAPR2020 = "Second Term: Jan - Apr 2020",
    SecondTermJanAPR2021 = "Second Term: Jan - Apr 2021",
    SecondTermJanAPR2022 = "Second Term: Jan - Apr 2022",
    SummerSessionMayAug2010 = "Summer Session: May - Aug 2010",
    SummerSessionMayAug2011 = "Summer Session: May - Aug 2011",
    SummerSessionMayAug2012 = "Summer Session: May - Aug 2012",
    SummerSessionMayAug2013 = "Summer Session: May - Aug 2013",
    SummerSessionMayAug2014 = "Summer Session: May - Aug 2014",
    SummerSessionMayAug2015 = "Summer Session: May - Aug 2015",
    SummerSessionMayAug2016 = "Summer Session: May - Aug 2016",
    SummerSessionMayAug2017 = "Summer Session: May - Aug 2017",
    SummerSessionMayAug2019 = "Summer Session: May - Aug 2019",
    SummerSessionMayAug2020 = "Summer Session: May - Aug 2020",
    SummerSessionMayAug2022 = "Summer Session: May - Aug 2022",
    SummerStudiesMayAug2008 = "Summer Studies: May - Aug 2008",
    SummerStudiesMayAug2009 = "Summer Studies: May - Aug 2009",
}