import styled, { css } from 'styled-components'

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
  `
}

export const Container = styled.div`
  margin: auto;
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  background-color: pink;
`

export const LeftPanelContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  height: 90%;
`

export const RightPanelContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 80px;
  right: 0;
  height: 90%;
`

export const SketchContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
`