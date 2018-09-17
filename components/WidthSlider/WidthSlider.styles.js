import styled from 'styled-components'

export const Wrapper = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`

export const SliderWrapper = styled.div`
  width: ${props => props.containerHeight}px;
  transform: rotate(270deg);
  margin-top: 150px;
  position: absolute;
  left: -100px;
  height: 30px;
`

export const SliderInput = styled.input`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  -webkit-appearance: none;
  width: calc(100% + 15px);
  height: 15px;
  border-radius: 5px;
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
    border: 1px solid white;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: ${props => props.value};
    height: ${props => props.value};
    border-radius: 50%;
    background-color: ${props => props.thumbColor};
    border: 1px solid white;
    cursor: pointer;
  }
`

export const Shape = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-right: 300px solid lightgray;
`
