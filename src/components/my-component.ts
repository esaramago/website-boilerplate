import {LitElement, html, css} from 'lit'
import {customElement} from 'lit/decorators.js'

@customElement('my-component')
export class MyComponent extends LitElement {

  static styles = css`
    :host {
      background-color: red;
    }
  `

  connectedCallback() {
    super.connectedCallback()
    console.log('connected')
  }

  render() {
    return html`
      <p>Hello World</p>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'my-component': MyComponent
  }
}
