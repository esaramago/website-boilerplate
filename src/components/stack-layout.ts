import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('stack-layout')
export class StackLayout extends LitElement {

  @property() gap: 'small' | 'large'

  static styles = css`
    .stack-layout {
      --internal-gap: var(--stack-layout-gap, 32px);
      gap: var(--internal-gap);
      display: flex;
      flex-direction: column;
    }
    .gap-small {
      --internal-gap: calc(var(--internal-gap) / 2);
    }
    .gap-large {
      --internal-gap: calc(var(--internal-gap) * 2);
    }
  `

  render() {
    return html`
      <div class="stack-layout ${this.gap && `gap-${this.gap}`}">
        <slot></slot>
      </div>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'stack-layout': StackLayout
  }
}
