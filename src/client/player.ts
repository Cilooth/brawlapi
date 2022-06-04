import axios from "axios";
import {
  BrawlerInterface,
  ClubInterface,
  IconInterface,
  PlayerInterface,
} from "../utils/types";

export class Player implements PlayerInterface {
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
  brawlersCount: number;
  starPowerCount: number;
  gadgetCount: number;
  gearsCount: number;
  club: ClubInterface | null;
  brawlers: BrawlerInterface[];

  constructor(data: PlayerInterface) {
    this.tag = data.tag;
    this.name = data.name;
    this.nameColor = data.nameColor;
    this.icon = data.icon;
    this.trophies = data.trophies;
    this.highestTrophies = data.highestTrophies;
    this.highestPowerPlayPoints = data.highestPowerPlayPoints;
    this.expLevel = data.expLevel;
    this.expPoints = data.expPoints;
    this.isQualifiedFromChampionshipChallenge =
      data.isQualifiedFromChampionshipChallenge;
    this.trioVictories = data["3vs3Victories"];
    this.soloVictories = data.soloVictories;
    this.duoVictories = data.duoVictories;
    this.bestRoboRumbleTime = data.bestRoboRumbleTime;
    this.brawlersCount = data.brawlers.length;
    this.starPowerCount = this.getStarPowerCount();
    this.gadgetCount = this.getGadgetCount();
    this.gearsCount = this.getGearCount();
    this.club = data.club;
    this.brawlers = data.brawlers;
  }

  getTotalWins(): number {
    return this.trioVictories + this.soloVictories + this.duoVictories;
  }

  async getIconUrl(): Promise<string> {
    let response = await axios.get("https://api.brawlapi.com/v1/icons");
    if (response.status !== 200) {
      throw new Error("Error getting icons from BrawlAPI");
    }
    return response.data.player[this.icon.id].imageUrl;
  }

  getColor() {
    if (this.nameColor == null) return "ffffff";
    return this.nameColor.slice(4);
  }

  getBrawlers(): BrawlerInterface[] {
    return this.brawlers;
  }

  getBrawlersByTrophies(): BrawlerInterface[] {
    return this.brawlers.sort((a, b) => {
      return b.trophies - a.trophies;
    });
  }

  getBrawlersByPower(): BrawlerInterface[] {
    return this.brawlers.sort((a, b) => {
      return b.power - a.power;
    });
  }

  getBrawlersByRank(): BrawlerInterface[] {
    return this.brawlers.sort((a, b) => {
      return b.rank - a.rank;
    });
  }

  getBrawlerByName(name: string): BrawlerInterface | null {
    return (
      this.brawlers.find((brawler) => brawler.name === name.toUpperCase()) ||
      null
    );
  }

  getBrawlerById(id: number): BrawlerInterface | null {
    return this.brawlers.find((brawler) => brawler.id === id) || null;
  }

  getBrawlerCount(): number {
    return this.brawlers.length;
  }

  getStarPowerCount(): number {
    return this.brawlers.reduce((acc, brawler) => {
      return acc + brawler.starPowers.length;
    }, 0);
  }

  getGadgetCount(): number {
    return this.brawlers.reduce((acc, brawler) => {
      return acc + brawler.gadgets.length;
    }, 0);
  }

  getGearCount(): number {
    return this.brawlers.reduce((acc, brawler) => {
      return acc + brawler.gears.length;
    }, 0);
  }
}
