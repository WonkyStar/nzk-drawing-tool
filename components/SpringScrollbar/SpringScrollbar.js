import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { SpringSystem, MathUtil } from 'rebound'

export default class SpringScrollbar extends Component {
  constructor (props, ...rest) {
    super(props, ...rest)
    this.handleSpringUpdate = this.handleSpringUpdate.bind(this)
  }

  componentDidMount () {
    this.springSystem = new SpringSystem()
    this.spring = this.springSystem.createSpring()
    this.spring.addListener({ onSpringUpdate: this.handleSpringUpdate })
  }

  componentWillUnmount () {
    this.springSystem.deregisterSpring(this.spring)
    this.springSystem.removeAllListeners()
    this.springSystem = undefined
    this.spring.destroy()
    this.spring = undefined
  }

  getScrollTop () {
    return this.refs.scrollbars.getScrollTop()
  }

  getScrollHeight () {
    return this.refs.scrollbars.getScrollHeight()
  }

  getHeight () {
    return this.refs.scrollbars.getHeight()
  }

  scrollTop (top) {
    const { scrollbars } = this.refs
    const scrollHeight = scrollbars.getScrollHeight()
    const val = MathUtil.mapValueInRange(
      top, // value
      0, // fromLow
      scrollHeight, // fromHigh
      top, // toLow
      scrollHeight // toHigh
    )
    this.spring.setCurrentValue(top).setAtRest()
    this.spring.setEndValue(val)
  }

  handleSpringUpdate (spring) {
    const { scrollbars } = this.refs
    const val = spring.getCurrentValue()
    scrollbars.scrollTop(val)
  }

  render () {
    return <Scrollbars {...this.props} ref="scrollbars" />
  }
}
