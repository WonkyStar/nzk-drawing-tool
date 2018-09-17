import React, { Component } from 'react'
import { OpacityCircle, SliderInput, Shape } from './OpacitySlider.styles'
import { Wrapper, SliderWrapper } from '../WidthSlider/WidthSlider.styles'

export default class OpacitySlider extends Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    height: 300,
    width: 30,
    thumbColor: 'yellow'
  }

  render() {
    const { height, width, opacity, changeOpacity, thumbColor, lineColor} = this.props
    return (
      <Wrapper height={height} width={width}>
        <SliderWrapper containerHeight={height}>
          <OpacityCircle lineColor={lineColor} />
          <Shape />
          <SliderInput
            type="range"
            min="5"
            max="10"
            value={opacity * 10}
            className="slider"
            id="myRange"
            onChange={changeOpacity}
            thumbColor={thumbColor}
          />
        </SliderWrapper>
      </Wrapper>
    )
  }
}