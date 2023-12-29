import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('layout-stack')
export class LayoutStack extends LitElement {

  @property({type: String}) direction: 'horizontal' | 'vertical' = 'vertical'
  @property({type: String}) align: 'unset' | 'center' | 'start' | 'end' = 'unset'
  @property({type: String}) gap: 'small' | 'large'

  static styles = css`
    :host {
      --default-gap: 16px;
      text-align: left; // prevent align-items from aligning right or center
    }
    .stack {
      --internal-gap: var(--layout-stack-gap, var(--default-gap));
      gap: var(--internal-gap);
      display: flex;
      flex-wrap: wrap;
      align-items: var(--align);
    }
    .stack-vertical {
      flex-direction: column;
    }
    .gap-small {
      gap: calc(var(--internal-gap) / 2);
    }
    .gap-large {
      gap: calc(var(--internal-gap) * 2);
    }
  `

  connectedCallback() {
    super.connectedCallback();
    this.style.setProperty('--align', this.align)
  }

  render() {
    return html`
      <div class="
        stack
        ${this.direction === 'vertical' ? 'stack-vertical' : ''}
        ${this.gap && `gap-${this.gap}`}">
        <slot></slot>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'layout-stack': LayoutStack
  }
}
