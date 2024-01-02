import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('layout-section')
export class LayoutSection extends LitElement {

  @property({type: String}) backgroundimage = null
  @property({type: String}) backgroundcolor = null
  @property({type: String}) mode: 'dark' | 'light' = 'light'

  static styles = css`
    :host {
      --default-padding: 32px;
    }
    .section {
      position: relative;
      padding: var(--layout-section-padding, var(--default-padding)) 0;
    }
    .slot {
      position: relative;
    }
    .image {
      position: absolute;
      inset: 0;
    }
    .image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: cover;
    }
    .dark-mode {
      color: rgba(255,255,255, .9);
      fill: rgba(255,255,255, .9);
    }
  `

  render() {
    return html`
      <section
        class="section ${this.mode === 'dark' ? 'dark-mode' : ''}"
      >
        ${this.backgroundimage ? html`
          <div class="image">
            <img
              aria-hidden="true"
              src="${this.backgroundimage}"
              style="${this.backgroundcolor ? `background-color: ${this.backgroundcolor}` : ''}"
            >
          </div>
        ` : ''}
        <div class="slot">
          <slot></slot>
        </div>
      </section>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'layout-section': LayoutSection
  }
}
