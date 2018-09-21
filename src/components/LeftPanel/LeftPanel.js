import React, { Component, Fragment } from 'react'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import { Tools } from '../../tools'
import { Container, Panel } from '../RightPanel/RightPanel.styles'
import { colors } from '../../index.styles'

const buttons = [
  {
    tool: Tools.Pencil,
    type: 'pencil',
    icon: 'rainbow'
  },
  {
    tool: 'reset',
    type: 'reset',
    icon: 'refresh'
  },
  // {
  //   tool: Tools.Sticker,
  //   type: 'sticker',
  //   icon: 'sticker'
  // },
  {
    tool: Tools.Eraser,
    type: 'eraser',
    icon: 'eraser'
  },
  {
    tool: 'width',
    type: 'width',
    icon: 'paintbrush'
  },
  {
    tool: 'opacity',
    type: 'opacity',
    icon: 'opacity'
  }
]

export default class LeftPanel extends Component {
  constructor (props) {
    super(props)

    this.isSectionActive = this.isSectionActive.bind(this)
    this.renderLeftSection = this.renderLeftSection.bind(this)
    this.getActiveButtonProps = this.getActiveButtonProps.bind(this)
    this.getInactiveButtonProps = this.getInactiveButtonProps.bind(this)
    this.getActiveIconProps = this.getActiveIconProps.bind(this)
    this.getInactiveIconProps = this.getInactiveIconProps.bind(this)

    this.state = {
      activeButton: 'pencil'
    }
  }

  getActiveButtonProps () {
    return {
      bgColor: colors.white,
      columnView: true,
      shadow: true,
      round: true,
      size: 'x-large'
    }
  }

  getInactiveButtonProps () {
    return {
      bgColor: colors.blue,
      columnView: true,
      shadow: true,
      round: true,
      size: 'large'
    }
  }

  getActiveIconProps () {
    return {
      color: colors.blue,
      size: 'x-large'
    }
  }

  getInactiveIconProps () {
    return {
      color: colors.white,
      size: 'large'
    }
  }

  renderLeftSection () {
    const { changeTool } = this.props
    return buttons.map(button => {
      return (
        <Button
          key={button.type}
          onClick={() => changeTool(button.tool)}
          {...(this.isSectionActive(button.type)
            ? this.getActiveButtonProps()
            : this.getInactiveButtonProps())}
        >
          <Icon
            name={button.icon}
            {...(this.isSectionActive(button.type)
              ? this.getActiveIconProps()
              : this.getInactiveIconProps())}
          />
        </Button>
      )
    })
  }

  isSectionActive (section) {
    return this.props.selectedSection === section
  }

  render () {
    return (
      <Container>
        <Panel spaceBetween>{this.renderLeftSection()}</Panel>
      </Container>
    )
  }
}
