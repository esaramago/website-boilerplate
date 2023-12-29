import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('layout-row-column')
export class LayoutRowColumn extends LitElement {

  @property({type: Number}) column = null

  static styles = css`
    :host {
      flex: var(--flex, 1) !important;
    }
  `

  connectedCallback() {
    super.connectedCallback();

    if (this.column) {
      this.style.setProperty('--flex', this.column)
    }
  }

  render() {
    return html`
      <slot></slot>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'layout-row-column': LayoutRowColumn
  }
}
