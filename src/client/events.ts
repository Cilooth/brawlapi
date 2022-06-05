import { EventSlotInterface } from "../utils/types";

export class Events {
  events: EventSlotInterface[];
  constructor(data: any) {
    this.events = data;
  }
}
