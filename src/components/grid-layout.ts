import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('grid-layout')
export class GridLayout extends LitElement {

  @property() align: 'center' | 'start' | 'end'
  @property() gap: 'small' | 'large'
  @property({type: Boolean}) wrap = false
  @property({type: Number}) min = 16

  static styles = css`
    .grid-layout {
      --internal-grid-layout-gap: var(--grid-layout-gap, 32px);
      --internal-gap: var(--internal-grid-layout-gap, 32px);
      display: flex;
      gap: var(--internal-gap);
    }

    .grid-layout > ::slotted(*) {
      flex: 1;
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

    .wrap {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(var(--internal-min), 1fr));
      grid-template-rows: min-content;
    }

    @media (max-width: 768px) {
      .grid-layout {
        flex-direction: column;
      }
    }
  `

  connectedCallback() {
    super.connectedCallback()
    this.style.setProperty('--internal-min', this.min.toString())
  }

  render() {
    return html`
      <div class="
        grid-layout
        ${this.align && `align-${this.align}`}
        ${this.gap && `gap-${this.gap}`}
        ${this.wrap ? 'wrap' : ''}
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
