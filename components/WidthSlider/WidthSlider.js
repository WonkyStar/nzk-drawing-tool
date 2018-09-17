import React, { Component } from 'react'
import { Wrapper, SliderWrapper, SliderInput, Shape } from './WidthSlider.styles'

export default class WidthSlider extends Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    height: 300,
    width: 30,
    thumbColor: 'yellow'
  }

  render() {
    const { height, width, lineWidth, changeWidth, thumbColor } = this.props
    return (
      <Wrapper height={height} width={width}>
        <SliderWrapper containerHeight={height}>
          <Shape />
          <SliderInput
            type="range"
            min="10"
            max="40"
            value={lineWidth}
            className="slider"
            id="myRange"
            onChange={changeWidth}
            thumbColor={thumbColor}
          />
        </SliderWrapper>
      </Wrapper>
    )
  }
}
