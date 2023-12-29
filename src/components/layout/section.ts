import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('layout-section')
export class LayoutSection extends LitElement {

  @property({type: String}) backgroundimage = null
  @property({type: String}) backgroundcolor = null

  static styles = css`
    :host {
      --default-padding: 32px;
    }
    .section {
      position: relative;
      padding: var(--layout-section-padding, var(--default-padding)) 0;
      background-position: center center;
      background-size: cover;
    }
    .image {
      position: absolute;
      inset: 0;
      opacity: .5;
      background-color: #333;
    }
    .slot {
      position: relative;
    }
    .dark-mode {
      color: rgba(255,255,255, .9);
      fill: rgba(255,255,255, .9);
    }
  `

  render() {
    return html`
      <section
        class="section ${this.backgroundimage ? 'dark-mode' : ''}"
        style="
          ${this.backgroundimage ? `background-image: url(${this.backgroundimage})` : ''}
          ${this.backgroundcolor ? `background-color: ${this.backgroundcolor}` : ''}
        "
      >
        <span aria-hidden="true" class="image"></span>
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
