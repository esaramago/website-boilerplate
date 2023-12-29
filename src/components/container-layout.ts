import {LitElement, html, css} from 'lit'
import {customElement} from 'lit/decorators.js'

@customElement('container-layout')
export class ContainerLayout extends LitElement {

  static styles = css`
    .container {
      --internal-max-width: var(--container-layout-max-width, 1200px);
      --internal-gap: var(--container-layout-gap, 32px);
      max-width: var(--internal-max-width);
      width: 100%;
      padding-left: var(--internal-gap);
      padding-right: var(--internal-gap);
      margin: auto;
      box-sizing: border-box;
    }
  `

  render() {
    return html`
      <div class="container">
        <slot></slot>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'container-layout': ContainerLayout
  }
}
