import axios from "axios";
import APIError from "./APIError";
import { Client } from "./client";
import { Player } from "./player";

const baseURL = "https://api.brawlstars.com/v1";

export default class request {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }

  getHeaders() {
    return {
      Authorization: `Bearer ${this.client.token}`,
      Accept: "application/json",
    };
  }

  async getPlayer(tag: string): Promise<Player> {
    let response = await axios.get(`${baseURL}/players/%23${tag}`, {
      headers: this.getHeaders(),
    });
    if (response.status !== 200)
      throw new APIError(response, response.data.reason);
    return new Player(response.data);
  }
}
