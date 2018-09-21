import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
      nameTo,
      color,
      glow,
      size,
      active,
      children,
      clickThrough,
      position,
      ...props
    } = this.props

    const opacity = active === false ? 0 : 1

    return (
      <div
        className={this.props.className}
        style={{
          filter: glow ? `drop-shadow(0 0 5px ${color})` : 'none',
          position: position || 'relative',
          height: this.getSize(size),
          width: this.getSize(size),
          pointerEvents: 'none'
        }}
      >
        <svg
          width={this.getSize(size)}
          height={this.getSize(size)}
          fill={color}
          style={{
            pointerEvents: clickThrough ? 'none' : '',
            opacity: opacity,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) ${this.props.flipped ? 'scale(-1)' : ''}`
          }}
        >
          <use xlinkHref={'#' + name} />
        </svg>
      </div>
    )
  }
}
