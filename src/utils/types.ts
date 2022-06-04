export interface IconInterface {
  id: number;
}

export interface ClubInterface {
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
  gears: GearInterface[] | null;
  starPowers: StarPowerInterface[] | null;
  gadgets: GadgetInterface[] | null;
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
  club: ClubInterface | null;
  brawlers: BrawlerInterface[];
}
