import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('grid-layout')
export class GridLayout extends LitElement {

  @property() align: 'center' | 'start' | 'end'
  @property() gap: 'small' | 'large'
  @property({type: String}) columnwidth = '250px'

  static styles = css`
    .grid-layout {
      --internal-grid-layout-gap: var(--grid-layout-gap, 32px);
      --internal-gap: var(--internal-grid-layout-gap, 32px);
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(var(--columnwidth), 1fr));
      grid-template-rows: min-content;
      gap: var(--internal-gap);
    }

    .gap-small {
      --internal-gap: calc(var(--internal-grid-layout-gap) / 2);
    }
    .gap-large {
      --internal-gap: calc(var(--internal-grid-layout-gap) * 2);
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
        grid-layout
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
    'grid-layout': GridLayout
  }
}
