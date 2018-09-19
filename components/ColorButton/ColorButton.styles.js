import styled from 'styled-components'
import { colors } from '../../DrawingTool.styles'

export const ButtonContainer = styled.div`
  width: ${props => (props.isActive ? '70px' : '50px')};
  height: ${props => (props.isActive ? '70px' : '50px')};
  border-radius: 50%;
  background-color: ${props => props.color};
  cursor: pointer;
  box-shadow: 0 5px 0 ${colors.shadow};
`
