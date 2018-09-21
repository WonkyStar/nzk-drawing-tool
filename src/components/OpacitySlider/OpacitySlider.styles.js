import styled from 'styled-components'
import { colors, tabletMaxWidth } from '../../index.styles'

export const OpacityCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.lineColor};
  margin: 0 auto;
`

export const SliderWrapper = styled.div`
  width: 230px;
  transform: rotate(270deg);
  margin-top: 90px;
  position: absolute;
  left: -68px;
  height: 70px;

  @media(max-width: ${tabletMaxWidth}px) {
    margin-top: 70px;
    left: -80px; 
  }
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

  &::-webkit-slider-runnable-track {
    border: none;
  }

  &:focus {
    outline: none;
  }

  &::-moz-range-track {
    background: transparent;
  }

  &:focus::-moz-range-track {
    outline: none;
    background: transparent;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-moz-range-thumb {
    height: 50px;
    width: 50px;
    z-index: 3;
    border: none;
    border-radius: 50%;
    background-color: ${colors.yellow};
    box-shadow: -4px 0 0 ${colors.shadow};
    cursor: pointer;
  }

  &::-ms-track {
    width: calc(100% - 15px);
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  &::-ms-thumb {
    appearance: none;
    z-index: 3;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: ${colors.yellow};
    box-shadow: -4px 0 0 ${colors.shadow};
    cursor: pointer;
  }

  &::-ms-fill-lower {
    background: transparent;
  }
`

export const Shape = styled.div`
  position: absolute;
  width: 300px;
  height: 15px;
`
