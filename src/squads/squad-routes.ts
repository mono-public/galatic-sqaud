import { RouterConfiguration } from "@mono-public/fast-router";
import { ChatThread } from "../chat/chat-thread";
import { SquadWelcome } from "./squad-welcome";

export class SquadRoutes extends RouterConfiguration {
  configure() {
    this.routes.map(
      { path: "", element: SquadWelcome as any },
      { path: "thread/{id}", element: ChatThread as any }
    );
  }
}
