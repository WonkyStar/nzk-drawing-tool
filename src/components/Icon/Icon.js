import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, StyledSvg } from './Icon.styles'

var files = require.context(
  '!svg-sprite-loader!../../assets/icons',
  false,
  /\.svg$/
)
files.keys().forEach(files)

export default class Icon extends Component {
  static propTypes = {
    name: PropTypes.string,
    nameTo: PropTypes.string,
    color: PropTypes.any,
    size: PropTypes.string,
    morph: PropTypes.bool,
    children: PropTypes.any,
    onClick: PropTypes.func
  }

  static defaultProps = {
    size: 'regular'
  }

  static displayName = 'Icon'

  constructor(props) {
    super(props)
  }

  getSize(size) {
    switch (size) {
      case 'small':
        return '12px'
      case 'regular':
        return '18px'
      case 'large':
        return '24px'
      case 'x-large':
        return '37px'
      default:
        return size
    }
  }

  render() {
    const {
      name,
      color,
      glow,
      size,
      active,
      clickThrough,
      position,
      flipped
    } = this.props

    const opacity = active === false ? 0 : 1

    return (
      <Container glow={glow} position={position}>
        <StyledSvg
          size={size}
          fill={color}
          clickThrough={clickThrough}
          opacity={opacity}
          flipped={flipped}
        >
          <use xlinkHref={'#' + name} />
        </StyledSvg>
      </Container>
    )
  }
}
