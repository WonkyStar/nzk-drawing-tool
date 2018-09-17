import React, { Component } from 'react'
import SpringScrollbar from '../SpringScrollbar/SpringScrollbar'
import { Scrollbars } from 'react-custom-scrollbars'
import { Container, Panel } from './RightPanel.styles.js'
import WidthSlider from '../WidthSlider/WidthSlider'
import OpacitySlider from '../OpacitySlider/OpacitySlider'
import Button from '../Button/Button'
import ColorButton from '../ColorButton/ColorButton'

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
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.scrollbarRefAvailable) {
      if (this.scrollbars.current) {
        this.setState({ scrollbarRefAvailable: true })
      }
    }
    else {
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
    } else if (this.props.selectedSection === 'width') {
      return this.renderWidthSlider()
    } else if (this.props.selectedSection === 'opacity') {
      return this.renderOpacitySlider()
    } else return
  }

  renderColors () {
    let colors = [
      {
        rgb: '255, 0, 0',
        isLocked: false
      },
      {
        rgb: '0, 0, 0',
        isLocked: false
      },
      {
        rgb: '251, 166, 56',
        isLocked: false
      },
      {
        rgb: '73, 36, 100',
        isLocked: false
      },
      {
        rgb: '255, 255, 0',
        isLocked: false
      },
      {
        rgb: '255, 175, 200',
        isLocked: false
      },
      {
        rgb: '5, 25, 200',
        isLocked: false
      },
      {
        rgb: '136, 184, 29',
        isLocked: false
      },
      {
        rgb: '148, 70, 223',
        isLocked: false
      },
      {
        rgb: '8, 70, 23',
        isLocked: true
      },
      {
        rgb: '218, 170, 93',
        isLocked: true
      },
      {
        rgb: '40, 200, 223',
        isLocked: true
      }
    ]
    return colors.map((color, index) => {
      return (
        <ColorButton
          key={index}
          color={`rgba(${color.rgb}, ${this.props.opacity})`}
          isLocked={color.isLocked}
          onClick={!color.isLocked ? () => [this.props.changeColor(color.rgb), this.setScrollHeight()] : null}
          isActive={this.isColorActive(color.rgb)}
        />
      )
    })
  }

  setScrollHeight() {
    const scrollHeight = this.scrollbars.current.getScrollTop()
    this.scrollbars.current.scrollTop(scrollHeight)
    this.setState({
      colorPanelScrollTop: scrollHeight
    })
  }

  isColorActive(color) {
    return this.props.rgbColor === color
  }

  renderResetSection () {
    const { undo, redo, clear, canUndo, canRedo } = this.props
    return [
      <Button
        key={1}
        icon={'left'}
        onClick={() => undo()}
        isActive={canUndo}
        disabled={!canUndo}
      />,
      <Button
        key={2}
        icon={'right'}
        onClick={() => redo()}
        isActive={canRedo}
        disabled={!canRedo}
      />,
      <Button key={3} icon={'cross'} onClick={() => clear()} isActive={true} />
    ]
  }

  renderWidthSlider () {
    const { changeWidth, lineWidth } = this.props
    return (
      <WidthSlider
        changeWidth={changeWidth}
        lineWidth={lineWidth}
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

  handleColorPanelScroll() {
    return this.scrollbars.current.scrollTop(this.state.colorPanelScrollTop)
  }

  render () {
    const { selectedSection } = this.props

    return (
      <Container>
        {selectedSection === 'pencil' ? (
          <Scrollbars
            ref={this.scrollbars}
            style={{ height: 'calc(100% - 120px)', width: '100%' }}
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
