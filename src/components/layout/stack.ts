import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('layout-stack')
export class LayoutStack extends LitElement {

  @property() gap: 'small' | 'large'

  static styles = css`
    :host {
      --default-gap: 32px;
    }
    .stack {
      --internal-gap: var(--layout-stack-gap, var(--default-gap));
      gap: var(--internal-gap);
      display: flex;
      flex-direction: column;
    }
    .gap-small {
      gap: calc(var(--internal-gap) / 2);
    }
    .gap-large {
      gap: calc(var(--internal-gap) * 2);
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
