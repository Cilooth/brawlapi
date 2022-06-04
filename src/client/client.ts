import { Player } from "./player";
import request from "./request";

export class Client {
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
}
