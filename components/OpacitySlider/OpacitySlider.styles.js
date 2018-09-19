import styled from 'styled-components'
import { colors } from '../../DrawingTool.styles'

export const OpacityCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.lineColor};
  margin: 0 auto;
`

export const SliderWrapper = styled.div`
  width: ${props => props.containerHeight}px;
  transform: rotate(270deg);
  margin-top: 100px;
  position: absolute;
  left: -130px;
  height: 70px;
`

export const SliderInput = styled.input`
  position: absolute;
  top: 47%;
  left: 48%;
  transform: translate(-50%, -50%);
  z-index: 2;
  -webkit-appearance: none;
  outline: none;
  width: calc(100% - 15px);
  height: 15px;
  border-radius: 10px;
  background: ${colors.blue};
  margin: 0 auto;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    z-index: 3;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: ${colors.yellow};
    box-shadow: -4px 0 0 ${colors.shadow};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    height: 50px;
    width: 50px;
    z-index: 3;
    border-radius: 50%;
    background-color: ${colors.yellow};
    box-shadow: -4px 0 0 ${colors.shadow};
    cursor: pointer;
  }
`

export const Shape = styled.div`
  position: absolute;
  width: 300px;
  height: 15px;
`
