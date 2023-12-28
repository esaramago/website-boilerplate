import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('flex-layout')
export class FlexLayout extends LitElement {

  @property({type: String}) align: 'center' | 'start' | 'end'
  @property({type: String}) gap: 'small' | 'large'

  static styles = css`
    .flex-layout {
      --internal-flex-layout-gap: var(--flex-layout-gap, 32px);
      --internal-gap: var(--internal-flex-layout-gap, 32px);
      display: flex;
      gap: var(--internal-gap);
    }

    .flex-layout ::slotted(*) {
      flex: 1;
    }

    .gap-small {
      --internal-gap: calc(var(--internal-flex-layout-gap) / 2);
    }
    .gap-large {
      --internal-gap: calc(var(--internal-flex-layout-gap) * 2);
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
      .flex-layout {
        flex-direction: column;
      }
    }
  `

  render() {
    return html`
      <div class="
        flex-layout
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
    'flex-layout': FlexLayout
  }
}
