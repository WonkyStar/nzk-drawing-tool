import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 120px;
  z-index: 2;
`

export const Panel = styled.div`
  min-height: min-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    margin-top: 15px;
  }
`