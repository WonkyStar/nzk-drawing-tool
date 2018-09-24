import { injectGlobal } from 'styled-components'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body { 
    margin: 0px;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;
    background-color: white;
  }

  :focus {
    outline: 0;
  }

  a {
    text-decoration: none;
  }

  .nzk-font {
    font-family: "Night Zookeeper";
	  letter-spacing: 1px;
	  text-transform: uppercase;
  }

  .nzk-secondary-font {
    font-family: 'Open Sans', sans-serif;
  }

  .nzk-text-font {
    font-family: 'Libre Baskerville', Baskerville, "Baskerville Old Face", "Hoefler Text", Garamond, "Times New Roman", serif;
	  font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0, "onum" 1, "lnum" 0, "dlig" 0;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
  }

  @font-face {
    font-family: 'NZK';
    src: url("assets/fonts/NZK/nightzookeeper-regular-webfont.eot");
    src: url("assets/fonts/NZK/nightzookeeper-regular-webfont.eot?#iefix") format('embedded-opentype'),
      url("assets/fonts/NZK/nightzookeeper-regular-webfont.woff") format('woff'),
      url("assets/fonts/NZK/nightzookeeper-regular-webfont.ttf") format('truetype'),
      url("assets/fonts/NZK/nightzookeeper-regular-webfont.svg#night_zookeeperregular") format('svg');
    font-weight: normal;
    font-style: normal;
  }
`
