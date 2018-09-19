import styled from 'styled-components'
import { colors } from '../../DrawingTool.styles'

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 90px;
  z-index: 2;
`

export const Panel = styled.div`
  min-height: min-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.spaceBetween ? 'space-between' : 'center'};
  align-items: center;
  background-color: ${colors.translucentWhite};
  border-radius: 70px;
  height: 350px;
  padding: 5px 0 20px;

  & > div {
    margin-top: 20px;
  }
`