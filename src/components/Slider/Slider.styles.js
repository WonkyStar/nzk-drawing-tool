import styled, { css } from 'styled-components'
import { fonts, fontSize, colors, tabletMaxWidth } from '../../index.styles'

export const Container = styled.div`
  background: ${colors.grey};
  border-radius: 70px;
  height: 224px;
  width: 50px;
  margin: 8px auto 0;
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.4), 0px 2px 0px rgba(171, 171, 171, 1);

  @media (max-width: ${tabletMaxWidth}px) {
    height: 184px;
    width: 38px;
  }
`

export const CurrentNumber = styled.p`
  ${fonts.proxima};
  ${fontSize.milli};
  text-align: center;
  color: ${colors.indigo};
  margin: 0 auto;
  padding-top: 10px;

  @media (max-width: ${tabletMaxWidth}px) {
    height: 18px;
    ${props => props.isOpacity ? fontSize.micro : null};
  }
`

export const Wrapper = styled.div`
  position: relative;
  height: 155px;

  @media (max-width: ${tabletMaxWidth}px) {
    height: 117px;
  }
`

export const SliderWrapper = styled.div`
  width: 135px;
  transform: rotate(270deg);
  position: absolute;
  top: 42px;
  left: -67px;
  height: 70px;

  @media (max-width: ${tabletMaxWidth}px) {
    width: 100px;
    top: 22px;
    left: -56px;
  }
`

export const SliderInput = styled.input`
  position: absolute;
  top: 60px;
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
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${props => props.thumbColor};
    cursor: pointer;

    @media (max-width: ${tabletMaxWidth}px) {
      width: 20px;
      height: 20px;
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
    width: 25px;
    height: 25px;
    border: none;
    border-radius: 50%;
    background-color: ${props => props.thumbColor};
    cursor: pointer;
  }

  &::-ms-track {
    background: transparent;
    border-width: 70px 0;
    border-color: transparent;
    color: transparent;
  }

  &::-ms-thumb {
    width: 25px;
    height: 25px;
    margin-top: 14px;
    border: none;
    border-radius: 50%;
    background-color: ${props => props.thumbColor};
    cursor: pointer;
  }

  &::-ms-fill-lower {
    background: transparent;
  }

  &::-ms-tooltip {
    display: none;
  }
`

export const TriangleShape = styled.div`
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border-radius: 70px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 135px solid ${colors.darkGrey};

  @media (max-width: ${tabletMaxWidth}px) {
    border-right: 100px solid ${colors.darkGrey};
  }
`

export const BarShape = styled.div`
  position: absolute;
  bottom: 6px;
  width: 135px;
  height: 8px;
  border-radius: 70px;
  background-color: ${colors.darkGrey};

  @media (max-width: ${tabletMaxWidth}px) {
    width: 100px;
  }
`

export const CurrentSettingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  margin: 0 auto;
`

export const CurrentSetting = styled.div`
  width: ${props => props.lineWidth}px;
  height: ${props => props.lineWidth}px;
  border-radius: 50%;
  background-color: ${props => props.color || colors.indigo};
`