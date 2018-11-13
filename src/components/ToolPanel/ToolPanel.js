import React, { Component, Fragment } from 'react'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import Slider from '../Slider/Slider'
import { Tools } from '../../tools'
import { Container, Panel } from '../ColourPanel/ColourPanel.styles'
import { EmptyButton } from './ToolPanel.styles'
import { colors } from '../../index.styles'

const buttons = [
  {
    onClick: (props) => props.undo(),
    type: 'undo',
    icon: 'undo'
  },
  {
    onClick: (props) => props.redo(),
    type: 'redo',
    icon: 'redo'
  },
  {
    onClick: (props) => props.clear(),
    type: 'trash',
    icon: 'trash'
  },
  {
    type: 'empty'
  },
  {
    tool: Tools.Eraser,
    type: 'eraser',
    icon: 'eraser'
  },
  {
    tool: 'width',
    type: 'width',
    icon: 'paintbrush',
    coloured: true
  },
  {
    tool: 'opacity',
    type: 'opacity',
    icon: 'opacity',
    coloured: true
  }
]

export default class ToolPanel extends Component {
  constructor (props) {
    super(props)

    this.isSectionActive = this.isSectionActive.bind(this)
    this.getActiveButtonProps = this.getActiveButtonProps.bind(this)
    this.getInactiveButtonProps = this.getInactiveButtonProps.bind(this)
    this.getActiveIconProps = this.getActiveIconProps.bind(this)
    this.getInactiveIconProps = this.getInactiveIconProps.bind(this)

    this.state = {
      activeButton: 'pencil'
    }
  }

  getActiveButtonProps (rgbColor, coloured) {
    return {
      bgColor: coloured ? `rgb(${rgbColor})` : colors.indigo,
      rgbColor: coloured ? rgbColor : '45, 31, 96',
      columnView: true,
      shadow: true,
      round: true,
      size: 'large'
    }
  }

  getInactiveButtonProps () {
    return {
      bgColor: colors.grey,
      rgbColor: '171, 171, 171',
      columnView: true,
      shadow: true,
      round: true,
      size: 'large'
    }
  }

  getActiveIconProps () {
    return {
      color: colors.white,
      size: 'large'
    }
  }

  getInactiveIconProps (rgbColor, coloured) {
    return {
      color: coloured ? `rgb(${rgbColor})` : colors.indigo,
      size: 'large'
    }
  }

  renderButtons () {
    const { changeTool, rgbColor } = this.props
    return buttons.map(button => {
      if(button.type === 'empty') {
        return <EmptyButton />
      }
      return (
        <Button
          key={button.type}
          onClick={() => button.tool ? changeTool(button.tool) : button.onClick(this.props)}
          {...(this.isSectionActive(button.type)
            ? this.getActiveButtonProps(rgbColor, button.coloured)
            : this.getInactiveButtonProps())}
        >
          <Icon
            name={button.icon}
            {...(this.isSectionActive(button.type)
              ? this.getActiveIconProps()
              : this.getInactiveIconProps(rgbColor, button.coloured))}
          />
        </Button>
      )
    })
  }

  renderSlider () {
    if (this.props.selectedSection === 'eraser') {
      return this.renderEraserSlider()
    } else if (this.props.selectedSection === 'width') {
      return this.renderWidthSlider()
    } else if (this.props.selectedSection === 'opacity') {
      return this.renderOpacitySlider()
    } else return null
  }

  renderEraserSlider () {
    const { changeEraserLineWidth, eraserLineWidth } = this.props
    return (
      <Slider
        type='width'
        changeWidth={changeEraserLineWidth}
        lineWidth={eraserLineWidth}
      />
    )
  }

  renderWidthSlider () {
    const { changeLineWidth, lineWidth, lineColor } = this.props
    return (
      <Slider
        type='width'
        changeWidth={changeLineWidth}
        lineWidth={lineWidth}
        lineColor={lineColor}
      />
    )
  }

  renderOpacitySlider () {
    const { changeOpacity, opacity, lineWidth, lineColor } = this.props
    return (
      <Slider
        type='opacity'
        changeOpacity={changeOpacity}
        opacity={opacity}
        lineWidth={lineWidth}
        lineColor={lineColor}
      />
    )
  }

  isSectionActive (section) {
    return this.props.selectedSection === section
  }

  render () {
    return (
      <Container>
        <Panel spaceBetween>
          {this.renderButtons()}
          {this.renderSlider()}
        </Panel>
      </Container>
    )
  }
}
