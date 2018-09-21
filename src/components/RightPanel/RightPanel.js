import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { Container, Panel, ButtonWrapper } from './RightPanel.styles.js'
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
          round
          size={this.isColorActive(color.rgb) ? 'x-large' : 'large'}
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
      round: true,
      size: 'large'
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
    return (
      <ButtonWrapper>
        {resetButtons.map(button => {
          return (
            <Button
              key={button.type}
              onClick={button.onClick}
              {...this.getInactiveButtonProps()}
            >
              <Icon name={button.type} {...this.getInactiveIconProps()} />
            </Button>
          )
        })}
      </ButtonWrapper>
    )
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
            style={{
              height: '390px', // this should become 310px on phoneMaxWidth
              width: '100%',
              borderRadius: '70px',
              zIndex: '0'
            }}
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
