import styled from 'styled-components'

export const OpacityCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  right: -70px;
  top: -5px;
  border: 1px solid rgba(255, 255, 255, 1);
  background-color: ${props => props.lineColor};
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
  border-radius: 10px;
  background: lightgrey;
  margin: 0 auto;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    z-index: 3;
    height: 40px;
    width: 10px;
    border-radius: 30%;
    background-color: ${props => props.thumbColor};
    border: 2px solid white;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    height: 40px;
    width: 10px;
    z-index: 3;
    border-radius: 30%;
    background-color: ${props => props.thumbColor};
    border: 2px solid white;
    cursor: pointer;
  }
`

export const Shape = styled.div`
  position: absolute;
  width: 300px;
  height: 15px;
`
