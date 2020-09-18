import { html, css, LitElement } from 'lit-element';

export class BackdropLogo extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        background-color: #000;
      }
      a {
        -webkit-transition: background-color 0.25s ease-out;
        transition: background-color 0.25s ease-out;
        color: #fdfdfc;
          text-decoration: none;
      }
      .header-site-name-link, .header-identity-wrapper, .block-system-header .block-content {
          display: block;
      }
      .header-site-name-link {
          display: grid;
          grid-template-columns: auto auto;
          grid-template-rows: auto;
          align-items: center;
          font-size: 2.5rem;
          line-height: 1.75rem;
          text-align: left;
          align-self: center;
      }
      .header-site-name-link {
          display: block;
          margin: 0;
      }
      strong {
          font-size: 30px;
          font-weight: bold;
          float: left;
      }
      strong {
          font-weight: inherit;
          margin: 33px 0;
      }
      img {
          display: block;
          float: left;
      }
      img {
          margin-right: 20px;
      }
      img {
          max-width: none;
          width: auto;
          max-height: 70px;
      }
      .header-logo-tall img {
          width: auto;
          height: 100%;
      }
      img {
          max-width: 100%;
          height: auto;
          vertical-align: middle;
          border-style: none;
      }
      :host([invert]){
        filter: invert(1);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      invert: { type: Boolean, reflect: true},
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
  }

  render() {
    return html`
<a href="/" title="Home" class="header-site-name-link" rel="home">
<div class="header-logo-wrapper header-logo-tall">
  <img src="https://backdrop-live.backdropcms.org/files/bd-logo-inverse.png" alt="Home" class="header-logo" width="470" height="470">
</div>
<strong>${this.title}</strong>
</a>
    `;
  }
}
