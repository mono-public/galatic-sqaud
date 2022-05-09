import { Constructable } from "@microsoft/fast-element";
import { Container } from "@microsoft/fast-foundation";
import { RouterConfiguration, Route, Layout } from "@mono-public/fast-router";
import { Session } from "./account/session";
import { AccountLogin } from "./account/login";
import { AccountSettings } from "./account/settings";
import { HomeScreen } from "./home/home";
import { NotFound } from "./not-found";
import { pageLayout } from "./layouts/page-layout";
import { ChatList } from "./chat/chat-list";
import { ShipList } from "./ships/ship-list";
import { VehicleList } from "./vehicles/vehicle-list";
import { SquadList } from "./squads/squad-list";

type RouteSettings = {
  public?: boolean;
};

export class MainRouterConfig extends RouterConfiguration<RouteSettings> {
  constructor(
    @Session private session: Session,
    @Container private container: Container
  ) {
    super();
  }

  public configure() {
    this.title = "Squads";
    this.defaultLayout = pageLayout;
    this.routes.map(
      { path: "", redirect: "home" },
      { path: "home", element: HomeScreen as any, title: "Home", name: "home" },
      {
        path: "account",
        layout: Layout.default,
        settings: { public: true },
        title: "Account",
        children: [
          {
            path: "login",
            element: AccountLogin as any,
            title: "Login",
            name: "login",
          },
          {
            path: "settings",
            element: AccountSettings as any,
            layout: pageLayout,
            title: "Settings",
            name: "settings",
            settings: { public: false },
          },
        ],
      },
      {
        path: "chat",
        element: ChatList as any,
        title: "Chat",
        name: "chat",
        childRouters: true,
      },
      {
        path: "squads",
        element: SquadList as any,
        name: "squads",
        childRouters: true,
      },
      {
        path: "ships",
        element: ShipList as any,
        title: "Ships",
        name: "ships",
      },
      {
        path: "vehicles",
        element: VehicleList as any,
        title: "Vehicles",
        name: "vehicles",
      },
      { path: "not-found", element: NotFound as any, title: "Not Found" }
    );

    const session = this.session;

    this.routes.fallback(() =>
      session.isLoggedIn ? { redirect: "home" } : { redirect: "login" }
    );

    this.contributors.push({
      navigate(phase) {
        const settings = phase.route.settings;

        if (settings && settings.public) {
          return;
        }

        if (session.isLoggedIn) {
          return;
        }

        phase.cancel(() => {
          session.captureReturnUrl();
          Route.name.replace(phase.router, "login");
        });
      },
    });
  }

  public construct<T>(Type: Constructable<T>): T {
    return this.container.get(Type) as T;
  }
}
