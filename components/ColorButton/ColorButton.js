import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ButtonContainer } from './ColorButton.styles'
import Icon from 'components/UI/Icon/Icon'

export default class ColorButton extends Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    isActive: false,
    isLocked: false
  }

  render() {
    const { color, isLocked, onClick, isActive } = this.props
    return (
      <ButtonContainer
        color={color}
        disabled={isLocked}
        onClick={onClick}
        isActive={isActive}
      >
        {isLocked && <Icon name={'padlock'} size={'x-large'} />}
      </ButtonContainer>
    )
  }
}
