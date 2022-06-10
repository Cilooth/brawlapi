import axios from "axios";
import {
  BattleListInterface,
  ClubInterface,
  CountryCode,
  RankingType,
} from "../utils/types";
import APIError from "./APIError";
import { Brawlers } from "./brawlers";
import { BrawlClient } from "./client";
import { Club } from "./club";
import { Events } from "./events";
import { Player } from "./player";
import { Ranking } from "./rankings";

const baseURL = "https://api.brawlstars.com/v1";

export default class request {
  client: BrawlClient;
  constructor(client: BrawlClient) {
    this.client = client;
  }

  getHeaders() {
    return {
      Authorization: `Bearer ${this.client.token}`,
      Accept: "application/json",
    };
  }

  async getPlayer(tag: string): Promise<Player> {
    tag = tag.replace("#", "");
    let response = await axios
      .get(`${baseURL}/players/%23${tag}`, {
        headers: this.getHeaders(),
      })
      .catch((error) => {
        throw new APIError(error.response, error.response.data.reason);
      });
    response.data.trioVictories = response.data["3vs3Victories"];
    return new Player(response.data);
  }

  async getPlayerBattleLog(tag: string): Promise<Array<BattleListInterface>> {
    tag = tag.replace("#", "");
    let response = await axios
      .get(`${baseURL}/players/%23${tag}/battlelog`, {
        headers: this.getHeaders(),
      })
      .catch((error) => {
        throw new APIError(error.response, error.response.data.reason);
      });
    return response.data.items;
  }

  async getClub(tag: string): Promise<ClubInterface> {
    tag = tag.replace("#", "");
    let response = await axios
      .get(`${baseURL}/clubs/%23${tag}`, {
        headers: this.getHeaders(),
      })
      .catch((error) => {
        throw new APIError(error.response, error.response.data.reason);
      });
    return new Club(response.data);
  }

  async getRankings(
    type: RankingType = RankingType.PLAYER,
    countryCode: CountryCode = CountryCode.GLOBAL,
    brawlerId: string | null = null
  ): Promise<Ranking> {
    if (type === RankingType.CLUB) {
      let response = await axios
        .get(`${baseURL}/rankings/${countryCode}/clubs`, {
          headers: this.getHeaders(),
        })
        .catch((error) => {
          throw new APIError(error.response, error.response.data.reason);
        });
      return new Ranking("club", response.data.items);
    }

    if (type === RankingType.BRAWLER && brawlerId === null)
      throw new Error("Brawler ID is required for this type");
    if (type === RankingType.BRAWLER) {
      let response = await axios
        .get(`${baseURL}/rankings/${countryCode}/brawlers/${brawlerId}`, {
          headers: this.getHeaders(),
        })
        .catch((error) => {
          throw new APIError(error.response, error.response.data.reason);
        });
      return new Ranking("brawler", response.data.items);
    }

    let response = await axios
      .get(`${baseURL}/rankings/${countryCode}/players`, {
        headers: this.getHeaders(),
      })
      .catch((error) => {
        throw new APIError(error.response, error.response.data.reason);
      });
    return new Ranking("player", response.data.items);
  }

  async getBrawlers(): Promise<Brawlers> {
    let response = await axios
      .get(`${baseURL}/brawlers`, {
        headers: this.getHeaders(),
      })
      .catch((error) => {
        throw new APIError(error.response, error.response.data.reason);
      });
    return new Brawlers(response.data);
  }

  async getEvents(): Promise<Events> {
    let response = await axios
      .get(`${baseURL}/events/rotation`, {
        headers: this.getHeaders(),
      })
      .catch((error) => {
        throw new APIError(error.response, error.response.data.reason);
      });
    return new Events(response.data);
  }
}
