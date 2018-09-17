import React, { Component } from 'react'
import { ButtonContainer } from './Button.styles'
import Icon from 'components/UI/Icon/Icon'

export default class Button extends Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    isActive: false
  }

  render() {
    const { isActive, disabled, onClick, icon } = this.props
    return (
      <ButtonContainer
        isActive={isActive}
        onClick={!disabled ? onClick : null}
        disabled={disabled}
      >
        <Icon name={icon} size={'x-large'} />
      </ButtonContainer>
    )
  }
}
