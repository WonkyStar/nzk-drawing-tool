import styled from 'styled-components'
import { colors, tabletMaxWidth } from '../../index.styles'

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 90px;
  z-index: 2;
`

export const Panel = styled.div`
  min-height: 350px;
  width: 100%;
  text-align: center;
  border-radius: 70px;
  padding: 20px 0;
  background-color: ${colors.translucentWhite};

  @media(max-width: ${tabletMaxWidth}px) {
    min-height: 300px;
  }
`

export const ButtonWrapper = styled.div`
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(max-width: ${tabletMaxWidth}px) {
    height: 300px;
  }
`