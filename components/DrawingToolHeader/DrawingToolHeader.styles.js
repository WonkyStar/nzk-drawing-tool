import styled, { css } from "styled-components"
import { fonts, colors } from '../../DrawingTool.styles'
import Button from 'components/UI/Button/Button'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
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
      `
    case 'textButtons':
      return css`
        color: ${colors.indigo};
        font-size: 24px;
        padding-right: 20px;
        ${fonts.proxima};
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
  height: 60px;
  width: ${props => props.width || '90%'};
  line-height: 60px;
  text-align: center;
  ${headerProps};
`

export const QuestionButton = styled(Button)`
  position: absolute;
  right: 15px;
`