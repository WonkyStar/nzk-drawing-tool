import { css } from 'styled-components'

export const spacingInputs = {
  tiny: 4,
  compact: 8,
  moderate: 12,
  normal: 16,
  expanded: 24,
  big: 32,
  giant: 40
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

// helper functions

const addPx = obj => {
  return Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      [key]: `${obj[key]}px`
    }),
    {}
  )
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

// dimensions styles outputs

export const spacing = addPx(spacingInputs)

export const fontSize = getFontSize(fontInputs)