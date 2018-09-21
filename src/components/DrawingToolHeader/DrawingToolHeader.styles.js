import styled, { css } from "styled-components"
import { fonts, colors, tabletMaxWidth } from '../../index.styles'
import Button from '../Button/Button'

export const Container = styled.div`
  display: flex;
  justify-content: ${props => props.layoutStyle === 'center' ? 'center' : 'space-between'};
  align-items: center;
  padding: 10px;
  height: 60px;

  @media(max-width: ${tabletMaxWidth}px) {
    height: 40px;
  }
`

export const ButtonContainer = styled.div`
  margin: 0 10px;
`

const headerProps = props => {
  switch (props.headerStyle) {
    case 'iconButtons':
      return css`
        border-radius: 25px;
        background-color: ${colors.translucentWhite};
        color: ${colors.white};
        font-size: 25px;
        ${fonts.libreBaskerville};

        @media(max-width: ${tabletMaxWidth}px) {
          font-size: 18px;
        }
      `
    case 'textButtons':
      return css`
        color: ${colors.indigo};
        font-size: 24px;
        ${fonts.proxima};

        @media(max-width: ${tabletMaxWidth}px) {
          font-size: 18px;
        }
      `
    default:
      return
  }
}

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${props => `${props.width}px` || '90%'};
  text-align: center;
  ${headerProps};
`

export const QuestionButton = styled(Button)`
  position: absolute;
  right: 15px;
`