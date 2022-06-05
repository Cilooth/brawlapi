export interface IconInterface {
  id: number;
}

export interface SmallClubInterface {
  tag: string;
  name: string;
}

export interface GearInterface {
  id: number;
  name: string;
  level: number;
}

export interface StarPowerInterface {
  id: number;
  name: string;
}

export interface GadgetInterface {
  id: number;
  name: string;
}

export interface BrawlerInterface {
  id: number;
  name: string;
  power: number;
  rank: number;
  trophies: number;
  highestTrophies: number;
  gears: GearInterface[] | Array<null>;
  starPowers: StarPowerInterface[] | Array<null>;
  gadgets: GadgetInterface[] | Array<null>;
}

export interface PlayerInterface {
  tag: string;
  name: string;
  nameColor: string;
  icon: IconInterface;
  trophies: number;
  highestTrophies: number;
  highestPowerPlayPoints: number | null;
  expLevel: number;
  expPoints: number;
  isQualifiedFromChampionshipChallenge: boolean;
  trioVictories: number;
  soloVictories: number;
  duoVictories: number;
  bestRoboRumbleTime: number;
  club: SmallClubInterface | null;
  brawlers: BrawlerInterface[];
}

export interface EventInterface {
  id: number;
  mode: string;
  map: string;
}

export interface BattleBrawlerInterface {
  id: number;
  name: string;
  power: number;
  trophies: number;
}

export interface StarPlayerInterface {
  tag: string;
  name: string;
  brawler: BattleBrawlerInterface;
}

export interface BattleInterface {
  mode: string;
  type: string;
  result: string;
  duration: number;
  trophyChange: number;
  starPlayer: StarPlayerInterface;
  teams: any[][];
}

export interface BattleListInterface {
  battleTime: string;
  event: EventInterface;
  battle: BattleInterface;
}

export interface ClubMemberInterface {
    tag: string;
    name: string;
    nameColor: string;
    role: string;
    trophies: number;
    icon: IconInterface;
}

export interface ClubInterface {
    tag: string;
    name: string;
    description: string | null;
    type: string;
    badgeId: number;
    requiredTrophies: number;
    trophies: number;
    members: ClubMemberInterface[];
}

export interface RankingClubInterface {
    tag: string;
    name: string;
    badgeId: number;
    trophies: number;
    rank: number;
    memberCount: number;
}

export interface RankingPlayerInterface {
    tag: string;
    name: string;
    nameColor: string;
    icon: IconInterface;
    trophies: number;
    rank: number;
    club: RankingPlayerClubInterface | null;
}

export interface RankingPlayerClubInterface {
    name: string;
}

export interface RankingInterface {
    type: string;
    rankings: RankingClubInterface[] | RankingPlayerInterface[];
}

export enum RankingType {
    CLUB = "club",
    PLAYER = "player",
    BRAWLER = "brawler"
}

export enum CountryCode {
    GLOBAL = "global",
    AF = 'AF',
    AX = 'AX',
    AL = 'AL',
    DZ = 'DZ',
    AS = 'AS',
    AD = 'AD',
    AO = 'AO',
    AI = 'AI',
    AQ = 'AQ',
    AG = 'AG',
    AR = 'AR',
    AM = 'AM',
    AW = 'AW',
    AU = 'AU',
    AT = 'AT',
    AZ = 'AZ',
    BS = 'BS',
    BH = 'BH',
    BD = 'BD',
    BB = 'BB',
    BY = 'BY',
    BE = 'BE',
    BZ = 'BZ',
    BJ = 'BJ',
    BM = 'BM',
    BT = 'BT',
    BO = 'BO',
    BA = 'BA',
    BW = 'BW',
    BV = 'BV',
    BR = 'BR',
    IO = 'IO',
    BN = 'BN',
    BG = 'BG',
    BF = 'BF',
    BI = 'BI',
    KH = 'KH',
    CM = 'CM',
    CA = 'CA',
    CV = 'CV',
    KY = 'KY',
    CF = 'CF',
    TD = 'TD',
    CL = 'CL',
    CN = 'CN',
    CX = 'CX',
    CC = 'CC',
    CO = 'CO',
    KM = 'KM',
    CG = 'CG',
    CD = 'CD',
    CK = 'CK',
    CR = 'CR',
    CI = 'CI',
    HR = 'HR',
    CU = 'CU',
    CY = 'CY',
    CZ = 'CZ',
    DK = 'DK',
    DJ = 'DJ',
    DM = 'DM',
    DO = 'DO',
    EC = 'EC',
    EG = 'EG',
    SV = 'SV',
    GQ = 'GQ',
    ER = 'ER',
    EE = 'EE',
    ET = 'ET',
    FK = 'FK',
    FO = 'FO',
    FJ = 'FJ',
    FI = 'FI',
    FR = 'FR',
    GF = 'GF',
    PF = 'PF',
    TF = 'TF',
    GA = 'GA',
    GM = 'GM',
    GE = 'GE',
    DE = 'DE',
    GH = 'GH',
    GI = 'GI',
    GR = 'GR',
    GL = 'GL',
    GD = 'GD',
    GP = 'GP',
    GU = 'GU',
    GT = 'GT',
    GG = 'GG',
    GN = 'GN',
    GW = 'GW',
    GY = 'GY',
    HT = 'HT',
    HM = 'HM',
    VA = 'VA',
    HN = 'HN',
    HK = 'HK',
    HU = 'HU',
    IS = 'IS',
    IN = 'IN',
    ID = 'ID',
    IR = 'IR',
    IQ = 'IQ',
    IE = 'IE',
    IM = 'IM',
    IL = 'IL',
    IT = 'IT',
    JM = 'JM',
    JP = 'JP',
    JE = 'JE',
    JO = 'JO',
    KZ = 'KZ',
    KE = 'KE',
    KI = 'KI',
    KR = 'KR',
    KW = 'KW',
    KG = 'KG',
    LA = 'LA',
    LV = 'LV',
    LB = 'LB',
    LS = 'LS',
    LR = 'LR',
    LY = 'LY',
    LI = 'LI',
    LT = 'LT',
    LU = 'LU',
    MO = 'MO',
    MK = 'MK',
    MG = 'MG',
    MW = 'MW',
    MY = 'MY',
    MV = 'MV',
    ML = 'ML',
    MT = 'MT',
    MH = 'MH',
    MQ = 'MQ',
    MR = 'MR',
    MU = 'MU',
    YT = 'YT',
    MX = 'MX',
    FM = 'FM',
    MD = 'MD',
    MC = 'MC',
    MN = 'MN',
    ME = 'ME',
    MS = 'MS',
    MA = 'MA',
    MZ = 'MZ',
    MM = 'MM',
    NA = 'NA',
    NR = 'NR',
    NP = 'NP',
    NL = 'NL',
    AN = 'AN',
    NC = 'NC',
    NZ = 'NZ',
    NI = 'NI',
    NE = 'NE',
    NG = 'NG',
    NU = 'NU',
    NF = 'NF',
    MP = 'MP',
    NO = 'NO',
    OM = 'OM',
    PK = 'PK',
    PW = 'PW',
    PS = 'PS',
    PA = 'PA',
    PG = 'PG',
    PY = 'PY',
    PE = 'PE',
    PH = 'PH',
    PN = 'PN',
    PL = 'PL',
    PT = 'PT',
    PR = 'PR',
    QA = 'QA',
    RE = 'RE',
    RO = 'RO',
    RU = 'RU',
    RW = 'RW',
    BL = 'BL',
    SH = 'SH',
    KN = 'KN',
    LC = 'LC',
    MF = 'MF',
    PM = 'PM',
    VC = 'VC',
    WS = 'WS',
    SM = 'SM',
    ST = 'ST',
    SA = 'SA',
    SN = 'SN',
    RS = 'RS',
    SC = 'SC',
    SL = 'SL',
    SG = 'SG',
    SK = 'SK',
    SI = 'SI',
    SB = 'SB',
    SO = 'SO',
    ZA = 'ZA',
    GS = 'GS',
    ES = 'ES',
    LK = 'LK',
    SD = 'SD',
    SR = 'SR',
    SJ = 'SJ',
    SZ = 'SZ',
    SE = 'SE',
    CH = 'CH',
    SY = 'SY',
    TW = 'TW',
    TJ = 'TJ',
    TZ = 'TZ',
    TH = 'TH',
    TL = 'TL',
    TG = 'TG',
    TK = 'TK',
    TO = 'TO',
    TT = 'TT',
    TN = 'TN',
    TR = 'TR',
    TM = 'TM',
    TC = 'TC',
    TV = 'TV',
    UG = 'UG',
    UA = 'UA',
    AE = 'AE',
    GB = 'GB',
    US = 'US',
    UM = 'UM',
    UY = 'UY',
    UZ = 'UZ',
    VU = 'VU',
    VE = 'VE',
    VN = 'VN',
    VG = 'VG',
    VI = 'VI',
    WF = 'WF',
    EH = 'EH',
    YE = 'YE',
    ZM = 'ZM',
    ZW = 'ZW'
  }

  export interface BaseBrawlerInterface {
    id: number;
    name: string;
    starPowers: StarPowerInterface[];
    gadgets: GadgetInterface[];
}

export interface EventSlotInterface {
    startTime: string;
    endTime: string;
    slotId: number;
    event: EventInterface;
}