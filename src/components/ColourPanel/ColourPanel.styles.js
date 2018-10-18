import styled from 'styled-components'
import { tabletMaxWidth } from '../../index.styles'

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 90px;
  z-index: 2;

  @media(max-width: ${tabletMaxWidth}px) {
    width: 65px;
  }
`

export const Panel = styled.div`
  min-height: 350px;
  width: 100%;
  text-align: center;
  padding: 20px 0;

  @media(max-width: ${tabletMaxWidth}px) {
    min-height: 270px;
  }
`