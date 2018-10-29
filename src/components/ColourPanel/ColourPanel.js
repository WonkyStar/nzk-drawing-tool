import React, { Component } from 'react'
import { Container, Panel, ButtonWrapper } from './ColourPanel.styles.js'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import { colors, tabletMaxWidth } from '../../index.styles'

export default class RightPanel extends Component {
  renderColors () {
    return this.props.colors.map((color, index) => {
      return (
        <Button
          key={index}
          columnView
          shadow
          round
          size='large'
          bgColor={`rgba(${color.rgb}, 1)`}
          rgbColor={color.rgb}
          onClick={
            !color.isLocked
              ? () => [
                this.props.changeColor(color.rgb),
                this.props.resetToPencil()
              ]
              : null
          }
        >
          {color.isLocked && (
            <Icon name={'padlock'} size={'large'} color={colors.white} />
          )}
        </Button>
      )
    })
  }

  render () {
    const { selectedSection, windowWidth } = this.props
    return (
      <Container>
        <Panel>
          {this.renderColors()}
        </Panel>
      </Container>
    )
  }
}