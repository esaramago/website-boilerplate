import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('layout-row')
export class RowLayout extends LitElement {

  @property({type: String}) align: 'center' | 'start' | 'end' = 'start'
  @property({type: String}) justify: 'unset' | 'space-between' = 'unset'
  @property({type: String}) gap: 'small' | 'large'

  static styles = css`
    :host {
      --default-gap: 32px;
    }
    .row {
      --internal-gap: var(--layout-row-gap, var(--default-gap));
      display: flex;
      gap: var(--internal-gap);
      align-items: var(--align);
      justify-content: var(--justify);
    }

    .row ::slotted(*) {
      flex: var(--flex);
    }

    .gap-small {
      gap: calc(var(--internal-gap) / 2);
    }
    .gap-large {
      gap: calc(var(--internal-gap) * 2);
    }

    @media (max-width: 768px) {
      .row {
        flex-direction: column;
      }
    }
  `

  connectedCallback() {
    super.connectedCallback();
    this.style.setProperty('--align', this.align)
    this.style.setProperty('--justify', this.justify)
    this.style.setProperty('--flex', this.justify === 'unset' ? '1' : 'none')
  }

  render() {
    return html`
      <div class="
        row
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
