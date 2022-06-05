import { RankingClubInterface, RankingInterface, RankingPlayerInterface } from "../utils/types";

export class Ranking implements RankingInterface {
  type: string;
  rankings: RankingClubInterface[] | RankingPlayerInterface[];

  constructor(type: string, data: any) {
    this.type = type;
    this.rankings = data;
  } 
}
