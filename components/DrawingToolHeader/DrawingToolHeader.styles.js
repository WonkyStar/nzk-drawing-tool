import styled, { css } from "styled-components"
import { fonts } from '../../DrawingTool.styles'
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
  switch (props.headerType) {
    case 'zoo':
      return css`
        border-radius: 25px;
        background-color: rgba(250,250,250, 0.6);
        color: white;
        font-size: 25px;
        ${fonts.libreBaskerville};
      `
    case 'sky':
      return css`
        color: #29235C;
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
  width: 90%;
  line-height: 60px;
  text-align: center;
  ${headerProps};
`

export const QuestionButton = styled(Button)`
  position: absolute;
  right: 15px;
`