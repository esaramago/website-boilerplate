import {LitElement, html, css} from 'lit'
import {customElement} from 'lit/decorators.js'

@customElement('layout-container')
export class LayoutContainer extends LitElement {

  static styles = css`
    :host {
      --default-padding: 32px;
      --default-max-width: 1200px;
    }
    .container {
      max-width: var(--layout-container-max-width, var(--default-max-width));
      width: 100%;
      padding-left: var(--layout-container-padding, var(--default-padding));
      padding-right: var(--layout-container-padding, var(--default-padding));
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
