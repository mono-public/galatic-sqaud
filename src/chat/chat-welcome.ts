import { css, customElement, FASTElement, html } from "@microsoft/fast-element";
import { mixin_screen } from "../styles";
import { styles_headers } from "../typography";

const template = html<ChatWelcome>`
  <div class="container">
    <h1>Welcome to Galactic Chat!</h1>
  </div>
`;

const styles = css`
  :host {
    ${mixin_screen()}
  }
  
  ${styles_headers}

  .container {
    display: flex;
    flex-direction: column;
    padding: 32px;
  }
`;

@customElement({
  name: 'chat-welcome',
  template,
  styles
})
export class ChatWelcome extends FASTElement {

}