import styled, { css } from 'styled-components'
import { tabletMaxWidth } from '../../index.styles'

const sizeStyle = props => {
  switch (props.size) {
    case 'small':
      return css`
        width: 12px;
        height: 12px;
      `
    case 'regular':
      return css`
        width: 18px;
        height: 18px;
      `
    case 'large':
      return css`
        width: 24px;
        height: 24px;

        @media(max-width: ${tabletMaxWidth}px) {
          width: 18px;
          height: 18px;
        }
      `
    case 'x-large':
      return css`
        width: 37px;
        height: 37px;

        @media(max-width: ${tabletMaxWidth}px) {
          width: 28px;
          height: 28px;
        }
      `
    default:
      break
  }
}

export const Container = styled.div`
  filter: ${props => props.glow ? `drop-shadow(0 0 5px ${props.color})` : 'none'};
  position: ${props => props.position || 'relative'};
  pointer-events: none;
  ${sizeStyle};
`

export const StyledSvg = styled.svg`
  fill: ${props => props.color};
  pointer-events: ${props => props.clickThrough ? 'none' : ''};
  opacity: ${props => props.opacity};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) ${props => props.flipped ? 'scale(-1)' : ''};
  ${sizeStyle};
`