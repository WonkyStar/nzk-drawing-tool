import React, { Component } from 'react'
import { Container, CurrentNumber, Wrapper, SliderWrapper, SliderInput, TriangleShape, BarShape, CurrentSettingWrapper, CurrentSetting } from './Slider.styles'
import { colors } from '../../index.styles'

export default class Slider extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { type, lineWidth, changeWidth, opacity, changeOpacity, lineColor } = this.props
    const isWidth = type === 'width'
    const isOpacity = type === 'opacity'

    return (
      <Container>
        <CurrentNumber isOpacity={isOpacity}>
          {isWidth ? lineWidth : `${Math.round(opacity * 100)}%`}
        </CurrentNumber>
        <Wrapper>
          <SliderWrapper>
            {isWidth && <TriangleShape />}
            {isOpacity && <BarShape />}
            <SliderInput
              type="range"
              min={isWidth ? '1' : '10'}
              max={isWidth ? '35' : '100'}
              value={isWidth ? lineWidth : opacity * 100}
              className="slider"
              id="myRange"
              onChange={isWidth ? changeWidth : changeOpacity}
              thumbColor={colors.indigo}
            />
          </SliderWrapper>
        </Wrapper>
          <CurrentSettingWrapper>
            <CurrentSetting
              lineWidth={lineWidth}
              color={lineColor}
            />
          </CurrentSettingWrapper>
      </Container>
    )
  }
}
