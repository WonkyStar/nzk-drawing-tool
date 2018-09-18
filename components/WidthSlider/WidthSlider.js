import React, { Component, Fragment } from 'react'
import { WidthNumber, Wrapper, SliderWrapper, SliderInput, Shape } from './WidthSlider.styles'

export default class WidthSlider extends Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    height: 250,
    width: 70
  }

  render() {
    const { height, width, lineWidth, changeWidth, thumbColor, type } = this.props
    return (
      <Fragment>
        <WidthNumber>{lineWidth}</WidthNumber>
        <Wrapper height={height} width={width}>
          <SliderWrapper containerHeight={height}>
            <Shape type={type} />
            <SliderInput
              type="range"
              min="10"
              max="70"
              value={lineWidth}
              className="slider"
              id="myRange"
              onChange={changeWidth}
              thumbColor={thumbColor}
            />
          </SliderWrapper>
        </Wrapper>
      </Fragment>
    )
  }
}
