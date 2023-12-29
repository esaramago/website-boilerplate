import {LitElement, html, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('section-layout')
export class SectionLayout extends LitElement {

  @property({type: String}) backgroundimage = null

  static styles = css`
    .section {
      position: relative;
      padding: var(--ds-spacing, 32px) 0;
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
        style="${this.backgroundimage ? `background-image: url(${this.backgroundimage})` : ''}"
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
    'section-layout': SectionLayout
  }
}
