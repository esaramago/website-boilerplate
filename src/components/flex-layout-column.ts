import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('flex-layout-column')
export class FlexLayoutColumn extends LitElement {

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
      <div class="
        flex-layout-column
      ">
        <slot></slot>
      </div>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'flex-layout-column': FlexLayoutColumn
  }
}
