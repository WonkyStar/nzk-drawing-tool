import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'

import DrawingTool from '../src/index'
import Slider from '../src/components/Slider/Slider'
import Button from '../src/components/Button/Button'

class SliderWithState extends Component {
  constructor() {
    super()
    this.state = {
      lineColor: 'rgba(255, 145, 0, 0.5)',
      lineWidth: 30,
      opacity: 0.5
    }
    this.changeLineWidth = this.changeLineWidth.bind(this)
    this.changeOpacity = this.changeOpacity.bind(this)
  }

  changeLineWidth(e) {
    this.setState({
      lineWidth: Number(e.target.value)
    })
  }

  changeOpacity(e) {
    const opacityValue = Number(e.target.value / 100)
    this.setState({
      opacity: opacityValue,
      lineColor: `rgba(${this.state.rgbColor}, ${opacityValue})`
    })
  }

  render() {
    return (
      <Slider
        type={this.props.type}
        lineWidth={this.state.lineWidth}
        changeWidth={this.changeLineWidth}
        opacity={this.state.opacity}
        changeOpacity={this.changeOpacity}
        lineColor={this.state.lineColor}
      />
    )
  }
}

storiesOf("DrawingTool", module)
  .add("Default", () => (
    <DrawingTool />
  ))
  .add("Slider - width", () => (
    <SliderWithState type='width' />
  ))
  .add("Slider - opacity", () => (
    <SliderWithState type='opacity' />
  ))
  .add("Button", () => (
    <Button>Save</Button>
  ))