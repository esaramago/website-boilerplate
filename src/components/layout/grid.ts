import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('layout-grid')
export class LayoutGrid extends LitElement {

  @property({type: String}) align: 'center' | 'start' | 'end' = 'start'
  @property({type: String}) gap: 'small' | 'large'
  @property({type: String}) columnwidth = '250px'

  static styles = css`
    :host {
      --default-gap: 32px;
    }
    .grid {
      --internal-gap: var(--layout-grid-gap, var(--default-gap));
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(var(--columnwidth), 1fr));
      grid-template-rows: min-content;
      gap: var(--internal-gap);
      align-items: var(--align);
    }

    .gap-small {
      gap: calc(var(--internal-gap) / 2);
    }
    .gap-large {
      gap: calc(var(--internal-gap) * 2);
    }

  `

  connectedCallback() {
    super.connectedCallback()
    this.style.setProperty('--columnwidth', this.columnwidth)
    this.style.setProperty('--align', this.align)
  }

  render() {
    return html`
      <div class="
        grid
        ${this.gap && `gap-${this.gap}`}
      ">
        <slot></slot>
      </div>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'layout-grid': LayoutGrid
  }
}
