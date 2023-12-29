import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('layout-stack')
export class LayoutStack extends LitElement {

  @property() gap: 'small' | 'large'

  static styles = css`
    .stack {
      --internal-stack-gap: var(--stack-gap, 32px);
      --internal-gap: var(--stack-gap, 32px);
      gap: var(--internal-gap);
      display: flex;
      flex-direction: column;
    }
    .gap-small {
      --internal-gap: calc(var(--internal-stack-gap) / 2);
    }
    .gap-large {
      --internal-gap: calc(var(--internal-stack-gap) * 2);
    }
  `

  render() {
    return html`
      <div class="stack ${this.gap && `gap-${this.gap}`}">
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
