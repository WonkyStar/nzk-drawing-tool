import styled from 'styled-components'
import { tabletMaxWidth } from '../../index.styles'

export const EmptyButton = styled.div`
  display: inline-block;
  vertical-align: top;
  height: 50px;
  width: 50px;
  margin-top: 8px;

  @media(max-width: ${tabletMaxWidth}px) {
    height: 31px;
    width: 38px;
  }
`