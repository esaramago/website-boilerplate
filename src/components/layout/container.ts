import {LitElement, html, css} from 'lit'
import {customElement} from 'lit/decorators.js'

@customElement('layout-container')
export class LayoutContainer extends LitElement {

  static styles = css`
    .container {
      --internal-max-width: var(--l-container-max-width, 1200px);
      --internal-gap: var(--l-container-gap, 32px);
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
    'layout-container': LayoutContainer
  }
}
