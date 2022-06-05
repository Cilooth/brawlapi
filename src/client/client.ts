import {
    BaseBrawlerInterface,
  BattleListInterface,
  ClubInterface,
  CountryCode,
  RankingType,
} from "../utils/types";
import { Brawlers } from "./brawlers";
import { Club } from "./club";
import { Events } from "./events";
import { Player } from "./player";
import { Ranking } from "./rankings";
import request from "./request";

export class BrawlClient {
  token: string;
  request: request;
  constructor(token: string) {
    this.token = token;
    this.request = new request(this);
  }

  async getPlayer(tag: string): Promise<Player> {
    let response = await this.request.getPlayer(tag);
    return new Player(response);
  }

  async getPlayerBattleLog(tag: string): Promise<Array<BattleListInterface>> {
    let response = await this.request.getPlayerBattleLog(tag);
    return response;
  }

  async getClub(tag: string): Promise<Club> {
    let response = await this.request.getClub(tag);
    return new Club(response);
  }

  async getRankings(
    type?: RankingType,
    countryCode?: CountryCode,
    brawlerId?: string
  ): Promise<Ranking> {
    let response = await this.request.getRankings(type, countryCode, brawlerId);
    return response;
  }

  async getBrawlers(): Promise<Brawlers> {
    let response = await this.request.getBrawlers();
    return response;
  }

  async getEvents(): Promise<Events> {
    let response = await this.request.getEvents();
    return response;
  }
}
