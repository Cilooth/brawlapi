import { ClubInterface, ClubMemberInterface } from "../utils/types";

export class Club implements ClubInterface {
  tag: string;
  name: string;
  description: string | null;
  type: string;
  badgeId: number;
  requiredTrophies: number;
  trophies: number;
  members: ClubMemberInterface[];
  memberCount: number;
  isFull: boolean;

  constructor(data: any) {
    this.tag = data.tag;
    this.name = data.name;
    this.description = data.description;
    this.type = data.type;
    this.badgeId = data.badgeId;
    this.requiredTrophies = data.requiredTrophies;
    this.trophies = data.trophies;
    this.members = data.members;
    this.memberCount = this.members.length;
    this.isFull = this.memberCount == 30
  }

  getMemberRank(tag: string): number {
    let member = this.members.find((member) => member.tag === tag);
    if (member) {
      return this.members.indexOf(member) + 1;
    }
    return -1;
  }

  getMemberRole(tag: string): string {
    let member = this.members.find((member) => member.tag === tag);
    if (member) {
      return member.role;
    }
    return "";
  }

  getPresident(): ClubMemberInterface {
    return this.members.find((member) => member.role === "president")!;
  }

  getVicePresidents(): ClubMemberInterface[] | undefined {
    return this.members.filter((member) => member.role === "vicePresident");
  }

  getSeniors(): ClubMemberInterface[] | undefined {
    return this.members.filter((member) => member.role === "senior");
  }
}
