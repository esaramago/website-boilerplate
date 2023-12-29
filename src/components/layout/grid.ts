import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('layout-grid')
export class LayoutGrid extends LitElement {

  @property() align: 'center' | 'start' | 'end'
  @property() gap: 'small' | 'large'
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
    }

    .gap-small {
      gap: calc(var(--internal-gap) / 2);
    }
    .gap-large {
      gap: calc(var(--internal-gap) * 2);
    }

    .align-center {
      align-items: center;
    }
    .align-start {
      align-items: start;
    }
    .align-end {
      align-items: end;
    }
  `

  connectedCallback() {
    super.connectedCallback()
    this.style.setProperty('--columnwidth', this.columnwidth.toString())
  }

  render() {
    return html`
      <div class="
        grid
        ${this.align && `align-${this.align}`}
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
