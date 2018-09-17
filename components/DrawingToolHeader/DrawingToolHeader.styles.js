import styled, { css } from "styled-components";
import { fonts } from '../../DrawingTool.styles';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

export const ButtonContainer = styled.div`
  margin: 0 10px;
`

export const Title = styled.div`
  height: 60px;
  width: 90%;
  border-radius: 25px;
  font-size: 25px;
  color: white;
  ${fonts.libreBaskerville};
  line-height: 60px;
  text-align: center;
  background-color: rgba(250,250,250, 0.6);
`
