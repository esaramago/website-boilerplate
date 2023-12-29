import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('layout-row-column')
export class LayoutRowColumn extends LitElement {

  @property({type: Number}) column = null
  @property() align: 'start' | 'center' | 'end' = 'start'
  @property() justify: 'start' | 'center' | 'end' = 'start'

  static styles = css`
    :host {
      flex: var(--flex, 1) !important;
      justify-self: var(--justify);
      align-self: var(--align);
    }
  `

  connectedCallback() {
    super.connectedCallback();

    if (this.column) {
      this.style.setProperty('--flex', this.column)
      this.style.setProperty('--align', this.align)
      this.style.setProperty('--justify', this.justify)
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
