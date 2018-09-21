import styled from 'styled-components'
import { fonts, colors } from '../../index.styles'

export const WidthNumber = styled.p`
  ${fonts.proxima};
  color: ${colors.indigo};
  margin: 10px auto;
`

export const Wrapper = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  position: relative;
`

export const SliderWrapper = styled.div`
  width: ${props => props.containerHeight}px;
  transform: rotate(270deg);
  margin-top: 115px;
  position: absolute;
  left: -100px;
  height: 70px;
`

export const SliderInput = styled.input`
  position: absolute;
  top: 55px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  -webkit-appearance: none;
  width: calc(100% + 15px);
  background: transparent;
  outline: none;
  margin: 0 auto;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: ${props => props.value}px;
    height: ${props => props.value}px;
    border-radius: 50%;
    background-color: ${props => props.thumbColor};
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
    background: transparent;
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: ${props => props.value};
    height: ${props => props.value};
    border: none;
    border-radius: 50%;
    background-color: ${props => props.thumbColor};
    box-shadow: -4px 0 0 ${colors.shadow};
    cursor: pointer;
  }

  &::-ms-track {
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  &::-ms-thumb {
    width: ${props => props.value};
    height: ${props => props.value};
    border: none;
    border-radius: 50%;
    background-color: ${props => props.thumbColor};
    box-shadow: -4px 0 0 ${colors.shadow};
    cursor: pointer;
    z-index: 100;
  }

  &::-ms-fill-lower {
    background: transparent;
  }
`

export const Shape = styled.div`
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border-radius: 70px;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-right: 250px solid ${colors.blue};
`
