import { accentFillRestBehavior, neutralFillStealthRestBehavior, neutralOutlineRestBehavior } from "@fluentui/web-components";
import { css, customElement, FASTElement, html } from "@microsoft/fast-element";
import { Route } from "@microsoft/fast-router";

const template = html<ActivityBar>`
  <fluent-button appearance="stealth" @click=${x => Route.name.push(x, 'home')}>
    <img src="static/image/icon/death-star.png">
    <div class="label">Home</div>
  </fluent-button>
  <fluent-button appearance="stealth" @click=${x => Route.name.push(x, 'chat')}>
  <img src="static/image/icon/chat.png">
    <div class="label">Chat</div>
  </fluent-button>
  <fluent-button appearance="stealth" @click=${x => Route.name.push(x, 'squads')}>
    <img src="static/image/icon/trooper.png">
    <div class="label">Squads</div>
  </fluent-button>
  <fluent-button appearance="stealth" @click=${x => Route.name.push(x, 'ships')}>
    <img src="static/image/icon/ship.webp">
    <div class="label">Ships</div>
  </fluent-button>
  <fluent-button appearance="stealth" @click=${x => Route.name.push(x, 'vehicles')}>
    <img src="static/image/icon/walker.png">
    <div class="label">Vehicles</div>
  </fluent-button>
  <fluent-button appearance="stealth" @click=${x => Route.name.push(x, 'help')}>
    <img src="static/image/icon/help.png">
    <div class="label">Help</div>
  </fluent-button>
`;

const styles = css`
  :host {
    contain: content;
    display: block;
    border-right: 1px solid ${neutralOutlineRestBehavior.var};
    background: ${neutralFillStealthRestBehavior.var};
    display: flex;
    flex-direction: column;
  }

  fluent-button:last-child {
    margin-top: auto;
  }

  fluent-button {
    width: 100%;
    height: 86px;
  }

  .label {
    font-size: 12px;
  }

  img {
    width: 38px;
  }

  svg {
    width: 100%;
    height: 54px;
  }
`.withBehaviors(
  neutralOutlineRestBehavior, 
  neutralFillStealthRestBehavior, 
  accentFillRestBehavior
);

@customElement({
  name: 'activity-bar',
  template,
  styles
})
export class ActivityBar extends FASTElement {

}