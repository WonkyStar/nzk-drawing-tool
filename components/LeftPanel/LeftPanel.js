import React, { Component, Fragment } from 'react'
import Button from 'components/UI/Button/Button'
import Icon from 'components/UI/Icon/Icon'
import { Tools } from '../../src'
import { Container, Panel } from '../RightPanel/RightPanel.styles'
import { base } from 'components/themes/homeTheme'

export default class LeftPanel extends Component {
  constructor(props) {
    super(props)

    this.isSectionActive = this.isSectionActive.bind(this)
    this.renderLeftSection = this.renderLeftSection.bind(this)
    this.getActiveButtonProps = this.getActiveButtonProps.bind(this)
    this.getInactiveButtonProps = this.getInactiveButtonProps.bind(this)
    this.getActiveIconProps = this.getActiveIconProps.bind(this)
    this.getInactiveIconProps = this.getInactiveIconProps.bind(this)

    this.state = {
      activeButton: 'pencil'
    }
  }

  getActiveButtonProps() {
    return ({
      bgColor: "white",
      columnView: true,
      shadow: true,
      width: '70px',
      height: '70px'
    })
  }

  getInactiveButtonProps() {
    return ({
      bgColor: base.primary,
      columnView: true,
      shadow: true,
      width: '50px',
      height: '50px'
    })
  }

  getActiveIconProps() {
    return ({
      color: base.primary, 
      size: "x-large"
    })
  }

  getInactiveIconProps() {
    return ({
      color: "white", 
      size: "large"
    })
  }

  renderLeftSection() {
    const { changeTool } = this.props
    return (
      <Fragment>
        <Button
          onClick={() => changeTool(Tools.Pencil)}
          {...this.isSectionActive('pencil') ? this.getActiveButtonProps() : this.getInactiveButtonProps()}
        >
          <Icon name="pencil" {...this.isSectionActive('pencil') ? this.getActiveIconProps() : this.getInactiveIconProps()}/>
        </Button>
        <Button
          onClick={() => changeTool('reset')}
          {...this.isSectionActive('reset') ? this.getActiveButtonProps() : this.getInactiveButtonProps()}
          >
          <Icon name="refresh" {...this.isSectionActive('reset') ? this.getActiveIconProps() : this.getInactiveIconProps()} />
        </Button>
        <Button
          onClick={() => changeTool(Tools.Sticker)}
          {...this.isSectionActive('sticker') ? this.getActiveButtonProps() : this.getInactiveButtonProps()}
        >
          <Icon name="draw" {...this.isSectionActive('sticker') ? this.getActiveIconProps() : this.getInactiveIconProps()} />
        </Button>
        <Button
          onClick={() => changeTool('width')}
          {...this.isSectionActive('width') ? this.getActiveButtonProps() : this.getInactiveButtonProps()}
        >
          <Icon name="logo" {...this.isSectionActive('width') ? this.getActiveIconProps() : this.getInactiveIconProps()} />
        </Button>
        <Button
          onClick={() => changeTool('opacity')}
          {...this.isSectionActive('opacity') ? this.getActiveButtonProps() : this.getInactiveButtonProps()}
        >
          <Icon name="torch" {...this.isSectionActive('opacity') ? this.getActiveIconProps() : this.getInactiveIconProps()} />
        </Button>
      </Fragment>
    )
  }

  isSectionActive(section) {
    return this.props.selectedSection === section
  }

  render() {
    return (
      <Container>
        <Panel spaceBetween>{this.renderLeftSection()}</Panel>
      </Container>
    )
  }
}