import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('layout-row-column')
export class LayoutRowColumn extends LitElement {

  @property({type: Number}) column = 1
  @property() align: 'start' | 'center' | 'end' = 'start'

  static styles = css`
    :host {
      flex: var(--flex) !important;
      align-self: var(--align);
    }
  `

  connectedCallback() {
    super.connectedCallback()
    this.style.setProperty('--flex', this.column.toString())
    this.style.setProperty('--align', this.align)
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
