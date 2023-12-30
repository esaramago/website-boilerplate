import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('layout-container')
export class LayoutContainer extends LitElement {

  @property() size: 'medium' | 'large' | 'small' = 'medium'

  static styles = css`
    :host {
      --default-padding: 32px;
    }
    .container {
      max-width: var(--layout-container-max-width, var(--maxwidth));
      width: 100%;
      padding-left: var(--layout-container-padding, var(--default-padding));
      padding-right: var(--layout-container-padding, var(--default-padding));
      margin: auto;
      box-sizing: border-box;
    }
    .container--small {
      max-width: var(--layout-container-max-width-small, var(--maxwidth));
    }
    .container--large {
      max-width: var(--layout-container-max-width-large, var(--maxwidth));
    }
  `

  private _setMaxWidthDefaults = () => {
    const defaultMaxWidth = {
      small: '900px',
      medium: '1200px',
      large: '1600px',
    }

    this.style.setProperty('--maxwidth', defaultMaxWidth[this.size])
  }

  connectedCallback() {
    super.connectedCallback()

    this._setMaxWidthDefaults()
  }

  render() {
    return html`
      <div class="container container--${this.size}">
        <slot></slot>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'layout-container': LayoutContainer
  }
}
