import styled, { css } from 'styled-components'
import { readableColor, darken, lighten } from 'polished'
import { fontSize } from '../../DrawingTool.styles'

const bgColorStyle = props => css`
  background-color: ${props.bgColor || '#55acf1'};
`

const colorStyle = props => {
  return css`
    color: ${props.color ||
      (props.bgColor
        ? readableColor(darken(0.1, props.bgColor))
        : readableColor(darken(0.3, '#55acf1')))};
  `
}

const borderRadiusStyle = props => {
  const defaultRadius = '100px'
  const radius = props.borderRadius || defaultRadius
  return css`
		border-radius: ${props.round ? '50%' : radius};
  `
}

const boxShadowStyle = props => {
  if (props.shadow) {
    switch (props.size) {
      case 'small':
        return css`
          box-shadow: 0 2px 0 rgba(0, 0, 0, 0.5);
        `
      case 'regular':
        return css`
          box-shadow: 0 3px 0 rgba(0, 0, 0, 0.5);
        `
      case 'large':
        return css`
          box-shadow: 0 4px 0 rgba(0, 0, 0, 0.5);
        `
      case 'x-large':
        return css`
          box-shadow: 0 6px 0 rgba(0, 0, 0, 0.5);
        `
      default:
        return null
    }
  }
}

const bgImageStyle = props => {
  const isImage = props.bgImage
  const image = `
    background-image: url(${props.bgImage});
    background-size: contain;
  `
  const isGradient = props.gradient || !!props.bgColorTo
  const gradient = `background-image: linear-gradient(to right, ${props.bgColor ||
    '#55acf1'}, ${props.bgColorTo ||
    lighten(0.2, props.bgColor || '#55acf1')})`

  return css`
    ${isImage ? image : isGradient ? gradient : 'background-image: none'};
  `
}

const widthStyle = props =>
  props.width
    ? css`
        width: ${props.width};
      `
    : null

const heightStyle = props =>
  props.height
    ? css`
        height: ${props.height};
      `
    : null

const marginStyle = props =>
  props.margin
    ? css`
        margin: ${props.margin};
      `
    : null

const displayStyle = props =>
  props.block
    ? css`
        display: block;
        width: 100%;
      `
    : null

const disabledPressedStyles = props =>
  props.disabled
    ? props.simpleDisabled
      ? css`
        pointer-events: none;
        filter: grayscale(50);
        box-shadow: none !important;
      `
    : props.pressedDisabled
      ? css`
          pointer-events: none;
          box-shadow: 0 -4px 0 rgba(0, 0, 0, 0.5);
        `
      : css`
					filter: grayscale(50);
					transform: translateY(4px);
					pointer-events: none;
          box-shadow: none !important;
        `
    : null

const activeStyle = props =>
  props.active
    ? css`
        transform: translateY(4px);
        box-shadow: none !important;
      `
    : null

const roundStyle = props => {
  if (props.round) {
    switch (props.size) {
      case 'small':
        return css`
          width: 21px;
          height: 21px;
          padding: 0px;
          font-size: ${fontSize.normal};
        `
      case 'regular':
        return css`
          width: 31px;
          height: 31px;
          padding: 0px;
          font-size: ${fontSize.kilo};
        `
      case 'large':
        return css`
          width: 41px;
          height: 41px;
          font-size: ${fontSize.giga};
          padding: 0px;
        `
      case 'x-large':
        return css`
          width: 64px;
          height: 64px;
          font-size: ${fontSize.tera};
          padding: 0px;
        `
      default:
        break
    }
    return css`
      width: ${props.size || props.width || props.height};
      height: ${props.size || props.width || props.height};
    `
  }
}

const sizeStyle = props => {
  switch (props.size) {
    case 'small':
      return css`
        height: 21px;
				padding: 0 9px;
				${props => !props.isIconButton
					? "line-height: 25px"  : null};
      `
    case 'regular':
      return css`
        height: 31px;
				padding: 0 16px;
				${props => !props.isIconButton
					? "line-height: 37px"  : null};
      `
    case 'large':
      return css`
        height: 41px;
				padding: 0 19px;
				${props => !props.hasIcon
					? "line-height: 48px"  : null};
      `
    case 'x-large':
      return css`
        height: 64px;
				padding: 0 31px;
				${props => !props.isIconButton
					? "line-height: 70px"  : null};
      `
    default:
      break
  }
  return css`
    width: ${props.size || props.width || props.height};
    height: ${props.size || props.width || props.height};
  `
}

const fontSizeStyle = props => {
  if (props.fontSize) {
    return css`
      font-size: ${props.fontSize};
    `
  }
  switch (props.size) {
    case 'small':
      return css`
        font-size: 15px;
      `
    case 'regular':
      return css`
        font-size: 20px;
      `
    case 'large':
      return css`
        font-size: 25px;
      `
    case 'x-large':
      return css`
        font-size: 39px;
      `
  }
}

const fontStyle = props =>
  props.fontSize
    ? css`
        font-size: ${props.fontSize};
      `
    : null

export const StyledButton = styled.button.attrs({
  className: 'StyledButton'
})`
	position: relative;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: ${props =>
    props.hasIconAndText ? 'space-between' : 'center'};
  margin: 0;
  font-family: 'NZK' !important;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: ${fontSize.milli};
  line-height: 1.2em;
  border: none;
  outline: none; // is this doing anything?
  cursor: pointer;
  text-decoration: none;
  user-select: none;
  vertical-align: top;
  text-align: center;

  ${heightStyle};
  ${widthStyle};
  ${marginStyle}
  ${bgColorStyle};
  ${bgImageStyle};
  ${fontSizeStyle};
  ${boxShadowStyle};
  ${borderRadiusStyle};
  ${colorStyle};
  ${displayStyle};
  ${disabledPressedStyles};
  ${activeStyle};
  ${sizeStyle};
  ${roundStyle};
  ${fontStyle};
	align-items: ${props => props.isIconButton ? "center" : ""};
  line-height: ${props => props.lineHeight ? props.lineHeight : ""};
  height: ${props => props.height ? props.height : ""};

  .StyledButton ~ & {
    ${props => props.columnView ? 'margin-top: 10px' : 'margin-left: 10px'}
  }

  &:active {
    transform: translateY(4px);
    box-shadow: none !important;
  }

  &:active,
  &:hover {
    text-decoration: none;
    ${colorStyle};
  }

  &:hover > * {
    text-decoration: none;
  }
`

export const StyledButtonLink = StyledButton.withComponent(`a`)
export const StyledButtonSpan = StyledButton.withComponent(`span`)
export const StyledButtonDiv = StyledButton.withComponent(`div`)
