import React, { Component, Fragment } from 'react'
import { OpacityCircle, SliderWrapper, SliderInput, Shape } from './OpacitySlider.styles'
import { Wrapper } from '../WidthSlider/WidthSlider.styles'
import { colors } from '../../index.styles'

export default class OpacitySlider extends Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    height: 275,
    width: 30,
    thumbColor: colors.yellow
  }

  render() {
    const { height, width, opacity, changeOpacity, thumbColor, lineColor} = this.props
    return (
      <Fragment>
        <Wrapper height={height} width={width} opacitySlider>
          <SliderWrapper>
            <Shape />
            <SliderInput
              type="range"
              min="10"
              max="100"
              value={opacity * 100}
              className="slider"
              id="myRange"
              onChange={changeOpacity}
              thumbColor={thumbColor}
            />
          </SliderWrapper>
        </Wrapper>
        <OpacityCircle lineColor={lineColor} />
      </Fragment>
    )
  }
}