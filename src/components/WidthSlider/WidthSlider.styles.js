import styled, { css } from 'styled-components'
import { fonts, colors, tabletMaxWidth } from '../../index.styles'

export const WidthNumber = styled.p`
  ${fonts.proxima};
  color: ${colors.indigo};
  margin: 10px auto;

  @media (max-width: ${tabletMaxWidth}px) {
    margin: 0 auto 2px;
  }
`

export const Wrapper = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  position: relative;

  @media (max-width: ${tabletMaxWidth}px) {
    ${props =>
    props.opacitySlider
      ? css`
            height: 220px;
          `
      : null};
  }
`

export const SliderWrapper = styled.div`
  width: ${props => props.containerHeight}px;
  transform: rotate(270deg);
  margin-top: 115px;
  position: absolute;
  left: -100px;
  height: 70px;

  @media (max-width: ${tabletMaxWidth}px) {
    margin-top: 93px;
    left: -113px;
  }
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

    @media (max-width: ${tabletMaxWidth}px) {
      width: ${props => props.value * 0.8}px;
      height: ${props => props.value * 0.8}px;
    }
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

  &::-moz-focus-outer {
    border: 0;
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
    border-width: 70px 0;
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
