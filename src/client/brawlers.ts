import { BaseBrawlerInterface } from "../utils/types";

export class Brawlers {
  brawlers: BaseBrawlerInterface[];
  brawlerCount: number;
  starPowerCount: number;
  gadgetCount: number;

  constructor(data: any) {
    this.brawlers = data.items;
    this.brawlerCount = this.brawlers.length;
    this.starPowerCount = this.getStarPowerCount();
    this.gadgetCount = this.getGadgetCount();
  }

  getBrawlers(): BaseBrawlerInterface[] {
    return this.brawlers;
  }

  getBrawlerCount(): number {
    return this.brawlerCount;
  }

  getBrawlerByName(name: string): BaseBrawlerInterface | undefined {
    return this.brawlers.find((brawler) => brawler.name === name);
  }

  getBrawlerById(id: number): BaseBrawlerInterface | undefined {
    return this.brawlers.find((brawler) => brawler.id === id);
  }

  getGadgetCount(): number {
    return this.brawlers.reduce((acc, brawler) => {
      return acc + brawler.gadgets.length;
    }, 0);
  }

  getStarPowerCount(): number {
    return this.brawlers.reduce((acc, brawler) => {
      return acc + brawler.starPowers.length;
    }, 0);
  }
}
