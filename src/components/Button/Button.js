import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyledButton,
  StyledButtonLink,
  StyledButtonDiv,
  StyledButtonSpan
} from './Button.styles'

export default class Button extends Component {
  static propTypes = {
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    shadow: PropTypes.bool,
    gradient: PropTypes.bool,
    round: PropTypes.bool,
    onClick: PropTypes.func,
    bgColor: PropTypes.any,
    bgColorTo: PropTypes.any,
    backgroundImage: PropTypes.string,
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
    color: PropTypes.any,
    size: PropTypes.oneOfType([
      PropTypes.oneOf(['small', 'regular', 'large', 'x-large']),
      PropTypes.string
    ]),
    width: PropTypes.string,
    height: PropTypes.string,
    borderRadius: PropTypes.string,
    element: PropTypes.string,
    children: PropTypes.any,
    pressedDisabled: PropTypes.bool
  }

  static defaultProps = {
    color: 'white',
    size: 'regular'
  }
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const { disabled, onClick } = this.props

    if (disabled) {
      event.preventDefault()
      event.stopPropagation()
      return
    }

    if (onClick) {
      onClick(event)
    }
  }

  isIconButton() {
    const children = this.props.children

    return (
        children &&
        children.type &&
        children.type.displayName === 'Icon'
      )
  }

  isIconPresent() {
    const children = this.props.children

    for (let child in children) {
      if (
        children[child] &&
        children[child].type &&
        children[child].type.displayName === 'Icon'
      ) {
        return true
      }
    }
    return false
  }

  isTextPresent() {
    const children = this.props.children

    for (let child in children) {
      if (typeof children[child] === 'string') {
        return true
      }
    }
    return false
  }

  getButton(element, children) {
    const enhancedProps = {
      ...this.props,
      isIconButton: this.isIconButton(),
      hasIconAndText: this.isIconPresent() && this.isTextPresent()
    }

    switch (element) {
      case 'span':
        return (
          <StyledButtonSpan {...enhancedProps}>{children}</StyledButtonSpan>
        )
      case 'button':
        return <StyledButton {...enhancedProps}>{children}</StyledButton>
      case 'a':
        return (
          <StyledButtonLink {...enhancedProps}>{children}</StyledButtonLink>
        )
      default:
        return <StyledButtonDiv {...enhancedProps}>{children}</StyledButtonDiv>
    }
  }

  render() {
    const {
      children,
      disabled,
      element,
      ...props
    } = this.props

    const button = this.getButton(element, children)
    if (disabled) props.tabIndex = -1
    return button
  }
}