import React, { Component } from 'react'
import { Container, Panel, ButtonWrapper } from './ColourPanel.styles.js'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import { colors, tabletMaxWidth } from '../../index.styles'

// const sounds = {
//   brown: new Audio(require('../../assets/sounds/brown.mp3')),
//   purple: new Audio(require('../../assets/sounds/purple.mp3')),
//   pink: new Audio(require('../../assets/sounds/pink.mp3')),
//   red: new Audio(require('../../assets/sounds/red.mp3')),
//   orange: new Audio(require('../../assets/sounds/orange.mp3')),
//   yellow: new Audio(require('../../assets/sounds/yellow.mp3')),
//   green: new Audio(require('../../assets/sounds/green.mp3')),
//   blue: new Audio(require('../../assets/sounds/blue.mp3')),
//   white: new Audio(require('../../assets/sounds/white.mp3')),
//   grey: new Audio(require('../../assets/sounds/grey.mp3')),
//   black: new Audio(require('../../assets/sounds/black.mp3'))
// }

export default class ColourPanel extends Component {
  playSound(colorAlias) {
    const audio = sounds[colorAlias]
    audio.play()
  }

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
              ? () => {
                this.props.changeColor(color.rgb)
                this.props.resetToPencil()
                // this.playSound(color.alias)
              }
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