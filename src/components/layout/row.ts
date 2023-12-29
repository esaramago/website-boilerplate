import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('layout-row')
export class RowLayout extends LitElement {

  @property({type: String}) align: 'center' | 'start' | 'end'
  @property({type: String}) gap: 'small' | 'large'

  static styles = css`
    .row {
      --internal-row-gap: var(--row-gap, 32px);
      --internal-gap: var(--internal-row-gap, 32px);
      display: flex;
      gap: var(--internal-gap);
    }

    .row ::slotted(*) {
      flex: 1;
    }

    .gap-small {
      --internal-gap: calc(var(--internal-row-gap) / 2);
    }
    .gap-large {
      --internal-gap: calc(var(--internal-row-gap) * 2);
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

    @media (max-width: 768px) {
      .row {
        flex-direction: column;
      }
    }
  `

  render() {
    return html`
      <div class="
        row
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
    'layout-row': RowLayout
  }
}
