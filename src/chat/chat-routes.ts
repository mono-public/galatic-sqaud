import { RouterConfiguration } from "@mono-public/fast-router";
import { ChatWelcome } from "./chat-welcome";
import { ChatThread } from "./chat-thread";

export class ChatRoutes extends RouterConfiguration {
  configure() {
    this.routes.map(
      { path: "", element: ChatWelcome as any },
      { path: "thread/{id}", element: ChatThread as any }
    );
  }
}
