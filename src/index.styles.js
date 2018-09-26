import styled, { css } from 'styled-components'

export const phoneMaxWidth = 550
export const tabletMaxWidth = 1023

export const fonts = {
  libreBaskerville: css`
    font-family: 'Libre Baskerville', Baskerville, 'Baskerville Old Face',
      'Hoefler Text', Garamond, 'Times New Roman', serif;
    font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1, 'pnum' 1, 'tnum' 0,
      'onum' 1, 'lnum' 0, 'dlig' 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  `,
  openSans: css`
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  `,
  nzk: css`
    font-family: 'NZK', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  `,
  proxima: css`
    font-family: 'Proxima Nova', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  `
}

export const fontInputs = {
  nano: 10,
  micro: 12,
  milli: 14,
  normal: 18,
  kilo: 24,
  mega: 28,
  giga: 30,
  tera: 40
}

const getFontSize = fontInputs => {
  return Object.keys(fontInputs).reduce(
    (acc, fontSize) => ({
      ...acc,
      [fontSize]: css`
        ${fontInputs[fontSize]}px
      `
    }),
    {}
  )
}

export const fontSize = getFontSize(fontInputs)

export const colors = {
  white: '#ffffff',
  grey: '#ebebeb',
  orange: '#F7931E',
  yellow: '#FCEE21',
  blue: '#55acf1',
  indigo: '#29235C',
  shadow: 'rgba(0, 0, 0, 0.4)',
  translucentWhite: 'rgba(250,250,250, 0.6)'
}

export const Container = styled.div`
  margin: auto;
  height: 100%;
  width: 100%;
  background-size: cover;
`

export const PanelContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
`

export const SketchContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: ${props => props.layoutStyle === 'center' ? 'center' : 'space-between'};
  align-items: center;
  width: 100%;
  height: calc(100% - 100px);
`

const canvasContainerProps = props => {
  if (props.backgroundImage || props.drawingToEdit) {
    return css`
      border-top: 2px solid ${colors.white};
      box-shadow: 0 6px 0 ${colors.shadow};
    `
  }
}

export const CanvasContainer = styled.div`
  width: ${props => props.width || null};
  height: ${props => props.height || null};
  ${canvasContainerProps};
`
