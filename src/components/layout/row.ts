import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('layout-row')
export class RowLayout extends LitElement {

  @property({type: String}) align: 'center' | 'start' | 'end'
  @property({type: String}) gap: 'small' | 'large'

  static styles = css`
    :host {
      --default-gap: 32px;
    }
    .row {
      --internal-gap: var(--layout-row-gap, var(--default-gap));
      display: flex;
      gap: var(--internal-gap);
    }

    .row ::slotted(*) {
      flex: 1;
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
