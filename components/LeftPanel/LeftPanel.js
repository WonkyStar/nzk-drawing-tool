import React, { Component, Fragment } from 'react'
import Button from 'components/UI/Button/Button'
import Icon from 'components/UI/Icon/Icon'
import { Tools } from '../../src'
import { Container, Panel } from '../RightPanel/RightPanel.styles'

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
      bgColor: "#55acf1",
      columnView: true,
      shadow: true,
      width: '50px',
      height: '50px'
    })
  }

  getActiveIconProps() {
    return ({
      color: "#55acf1", 
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
          <Icon name="rainbow" {...this.isSectionActive('pencil') ? this.getActiveIconProps() : this.getInactiveIconProps()}/>
        </Button>
        <Button
          onClick={() => changeTool('reset')}
          {...this.isSectionActive('reset') ? this.getActiveButtonProps() : this.getInactiveButtonProps()}
          >
          <Icon name="refresh" {...this.isSectionActive('reset') ? this.getActiveIconProps() : this.getInactiveIconProps()} />
        </Button>
        {/*<Button
          onClick={() => changeTool(Tools.Sticker)}
          {...this.isSectionActive('sticker') ? this.getActiveButtonProps() : this.getInactiveButtonProps()}
        >
          <Icon name="sticker" {...this.isSectionActive('sticker') ? this.getActiveIconProps() : this.getInactiveIconProps()} />
        </Button>*/}
        <Button
          onClick={() => changeTool(Tools.Eraser)}
          {...this.isSectionActive('eraser') ? this.getActiveButtonProps() : this.getInactiveButtonProps()}
        >
          <Icon name="eraser" {...this.isSectionActive('eraser') ? this.getActiveIconProps() : this.getInactiveIconProps()} />
        </Button>
        <Button
          onClick={() => changeTool('width')}
          {...this.isSectionActive('width') ? this.getActiveButtonProps() : this.getInactiveButtonProps()}
        >
          <Icon name="paintbrush" {...this.isSectionActive('width') ? this.getActiveIconProps() : this.getInactiveIconProps()} />
        </Button>
        <Button
          onClick={() => changeTool('opacity')}
          {...this.isSectionActive('opacity') ? this.getActiveButtonProps() : this.getInactiveButtonProps()}
        >
          <Icon name="opacity" {...this.isSectionActive('opacity') ? this.getActiveIconProps() : this.getInactiveIconProps()} />
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