import React, { Component, Fragment } from 'react'
import SpringScrollbar from '../SpringScrollbar/SpringScrollbar'
import { Scrollbars } from 'react-custom-scrollbars'
import { Container, Panel } from './RightPanel.styles.js'
import WidthSlider from '../WidthSlider/WidthSlider'
import OpacitySlider from '../OpacitySlider/OpacitySlider'
// import Button from '../Button/Button'
import ColorButton from '../ColorButton/ColorButton'
import Button from 'components/UI/Button/Button'
import Icon from 'components/UI/Icon/Icon'

export default class RightPanel extends Component {
  constructor (props) {
    super(props)

    this.state = {
      scrollbarRefAvailable: false,
      colorPanelScrollTop: 0
    }

    this.renderRightSection = this.renderRightSection.bind(this)
    this.handleColorPanelScroll = this.handleColorPanelScroll.bind(this)
    this.renderResetSection = this.renderResetSection.bind(this)
    this.renderWidthSlider = this.renderWidthSlider.bind(this)
    this.renderWidthSlider = this.renderWidthSlider.bind(this)
    this.renderOpacitySlider = this.renderOpacitySlider.bind(this)
    this.renderColors = this.renderColors.bind(this)
    this.isColorActive = this.isColorActive.bind(this)
    this.scrollbars = React.createRef()
    this.getActiveButtonProps = this.getActiveButtonProps.bind(this)
    this.getInactiveButtonProps = this.getInactiveButtonProps.bind(this)
    this.getActiveIconProps = this.getActiveIconProps.bind(this)
    this.getInactiveIconProps = this.getInactiveIconProps.bind(this)
  }

  componentDidUpdate (prevProps, prevState) {
    if (!prevState.scrollbarRefAvailable) {
      if (this.scrollbars.current) {
        this.setState({ scrollbarRefAvailable: true })
      }
    } else {
      if (!this.scrollbars.current) {
        this.setState({ scrollbarRefAvailable: false })
      }
    }
  }

  renderRightSection () {
    if (this.props.selectedSection === 'pencil') {
      return this.renderColors()
    } else if (this.props.selectedSection === 'reset') {
      return this.renderResetSection()
    } else if (this.props.selectedSection === 'eraser') {
      return this.renderEraserSlider()
    } else if (this.props.selectedSection === 'width') {
      return this.renderWidthSlider()
    } else if (this.props.selectedSection === 'opacity') {
      return this.renderOpacitySlider()
    } else return
  }

  renderColors () {
    return this.props.colors.map((color, index) => {
      return (
        <ColorButton
          key={index}
          color={`rgba(${color.rgb}, ${this.props.opacity})`}
          isLocked={color.isLocked}
          onClick={
            !color.isLocked
              ? () => [
                this.props.changeColor(color.rgb),
                this.setScrollHeight()
              ]
              : null
          }
          isActive={this.isColorActive(color.rgb)}
        />
      )
    })
  }

  setScrollHeight () {
    const scrollHeight = this.scrollbars.current.getScrollTop()
    this.scrollbars.current.scrollTop(scrollHeight)
    this.setState({
      colorPanelScrollTop: scrollHeight
    })
  }

  isColorActive (color) {
    return this.props.rgbColor === color
  }

  getActiveButtonProps () {
    return {
      bgColor: 'white',
      columnView: true,
      shadow: true,
      width: '70px',
      height: '70px'
    }
  }

  getInactiveButtonProps () {
    return {
      bgColor: "#55acf1",
      columnView: true,
      shadow: true,
      width: '50px',
      height: '50px'
    }
  }

  getActiveIconProps () {
    return {
      color: "#55acf1",
      size: 'x-large'
    }
  }

  getInactiveIconProps () {
    return {
      color: 'white',
      size: 'large'
    }
  }

  renderResetSection () {
    const { undo, redo, clear, canUndo, canRedo } = this.props
    return (
      <Fragment>
        <div>
          <Button onClick={() => redo()} {...this.getInactiveButtonProps()}>
            <Icon name="redo" {...this.getInactiveIconProps()} />
          </Button>
        </div>
        <div>
          <Button onClick={() => undo()} {...this.getInactiveButtonProps()}>
            <Icon name="undo" {...this.getInactiveIconProps()} />
          </Button>
        </div>
        <div>
          <Button onClick={() => clear()} {...this.getInactiveButtonProps()}>
            <Icon name="trash" {...this.getInactiveIconProps()} />
          </Button>
        </div>
      </Fragment>
    )
  }

  renderEraserSlider() {
    const { changeWidth, lineWidth } = this.props
    return <WidthSlider changeWidth={changeWidth} lineWidth={lineWidth} thumbColor="#ebebeb" />
  }

  renderWidthSlider () {
    const { changeWidth, lineWidth, lineColor } = this.props
    return <WidthSlider changeWidth={changeWidth} lineWidth={lineWidth} thumbColor={lineColor} />
  }

  renderOpacitySlider () {
    const { changeOpacity, opacity, lineColor } = this.props
    return (
      <OpacitySlider
        changeOpacity={changeOpacity}
        opacity={opacity}
        lineColor={lineColor}
      />
    )
  }

  handleColorPanelScroll () {
    return this.scrollbars.current.scrollTop(this.state.colorPanelScrollTop)
  }

  render () {
    const { selectedSection } = this.props

    return (
      <Container>
        {selectedSection === 'pencil' ? (
          <Scrollbars
            ref={this.scrollbars}
            style={{ height: '350px', width: '100%', borderRadius: '60px' }}
          >
            <Panel>{this.renderRightSection()}</Panel>
            {this.state.scrollbarRefAvailable && this.handleColorPanelScroll()}
          </Scrollbars>
        ) : (
          <Panel>{this.renderRightSection()}</Panel>
        )}
      </Container>
    )
  }
}
