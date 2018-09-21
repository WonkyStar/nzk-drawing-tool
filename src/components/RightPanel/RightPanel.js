import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { Container, Panel } from './RightPanel.styles.js'
import WidthSlider from '../WidthSlider/WidthSlider'
import OpacitySlider from '../OpacitySlider/OpacitySlider'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import { colors } from '../../index.styles'

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
    this.renderOpacitySlider = this.renderOpacitySlider.bind(this)
    this.renderColors = this.renderColors.bind(this)
    this.isColorActive = this.isColorActive.bind(this)
    this.scrollbars = React.createRef()
    this.getInactiveButtonProps = this.getInactiveButtonProps.bind(this)
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
        <Button
          key={index}
          columnView
          shadow
          width={this.isColorActive(color.rgb) ? '70px' : '50px'}
          height={this.isColorActive(color.rgb) ? '70px' : '50px'}
          bgColor={`rgba(${color.rgb}, ${this.props.opacity})`}
          onClick={
            !color.isLocked
              ? () => [
                this.props.changeColor(color.rgb),
                this.setScrollHeight()
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

  getInactiveButtonProps () {
    return {
      bgColor: colors.blue,
      columnView: true,
      shadow: true,
      width: '50px',
      height: '50px'
    }
  }

  getInactiveIconProps () {
    return {
      color: colors.white,
      size: 'large'
    }
  }

  renderResetSection () {
    const { undo, redo, clear } = this.props
    const resetButtons = [
      {
        onClick: () => redo(),
        type: 'redo'
      },
      {
        onClick: () => undo(),
        type: 'undo'
      },
      {
        onClick: () => clear(),
        type: 'trash'
      }
    ]
    return resetButtons.map(button => {
      return (
        <div>
          <Button
            key={button.type}
            onClick={button.onClick}
            {...this.getInactiveButtonProps()}
          >
            <Icon name={button.type} {...this.getInactiveIconProps()} />
          </Button>
        </div>
      )
    })
  }

  renderEraserSlider () {
    const { changeEraserLineWidth, eraserLineWidth } = this.props
    return (
      <WidthSlider
        changeWidth={changeEraserLineWidth}
        lineWidth={eraserLineWidth}
        thumbColor={colors.grey}
      />
    )
  }

  renderWidthSlider () {
    const { changeLineWidth, lineWidth, lineColor } = this.props
    return (
      <WidthSlider
        changeWidth={changeLineWidth}
        lineWidth={lineWidth}
        thumbColor={lineColor}
      />
    )
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
            style={{ height: '375px', width: '100%', borderRadius: '70px' }}
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
