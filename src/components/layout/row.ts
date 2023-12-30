import {LitElement, html, css} from 'lit'
import {customElement, property, state} from 'lit/decorators.js'

@customElement('layout-row')
export class RowLayout extends LitElement {

  @property() align: 'unset' | 'center' | 'start' | 'end' = 'unset'
  @property() justify: 'unset' | 'space-between' = 'unset'
  @property() gap: 'small' | 'large'

  @property() columns?: string // example: '[2, 4, 200px]'


  static styles = css`
    :host {
      --default-gap: 32px;
      text-align: left;
    }
    .row {
      --internal-gap: var(--layout-row-gap, var(--default-gap));
      display: flex;
      gap: var(--internal-gap);
      align-items: var(--align);
      justify-content: var(--justify);
    }
    .has-defined-columns {
      display: grid;
      grid-template-columns: var(--gridcolumns);
    }

    .gap-small {
      gap: calc(var(--internal-gap) / 2);
    }
    .gap-large {
      gap: calc(var(--internal-gap) * 2);
    }

    @media (max-width: 768px) {
      .row {
        display: flex;
        flex-direction: column;
      }
    }
  `

  @state() hasDefinedColumns: boolean = false

  private _getGridColumns = () => {

    if (!this.columns) return null

    const columnsArray = this.columns.split(',') // array of columns

    let columns = ''
    columnsArray.forEach(col => {
      col = col.replaceAll(' ', '') // trim whitespaces
      const isNumber = !isNaN(Number(col))
      columns += isNumber ? `${col}fr ` : `${col} `
    })

    return columns
  }

  connectedCallback() {
    super.connectedCallback();
    this.style.setProperty('--align', this.align)
    this.style.setProperty('--justify', this.justify)

    if (this.columns) {
      this.style.setProperty('--gridcolumns', this._getGridColumns())
      this.hasDefinedColumns = true
    }
  }

  render() {
    return html`
      <div class="
        row
        ${this.hasDefinedColumns ? 'has-defined-columns' : ''}
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
