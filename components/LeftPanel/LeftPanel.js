import React, { Component, Fragment } from 'react'
import Button from '../Button/Button'
import { Tools } from '../../src'
import { Container, Panel } from '../RightPanel/RightPanel.styles'

export default class LeftPanel extends Component {
  constructor(props) {
    super(props)

    this.isSectionActive = this.isSectionActive.bind(this)
    this.renderLeftSection = this.renderLeftSection.bind(this)
  }

  renderLeftSection() {
    const { changeTool } = this.props
    return (
      <Fragment>
        <Button
          icon={'pencil'}
          isActive={this.isSectionActive('pencil')}
          onClick={() => changeTool(Tools.Pencil)}
        />
        <Button
          icon={'refresh'}
          isActive={this.isSectionActive('reset')}
          onClick={() => changeTool('reset')}
        />
        <Button
          icon={'draw'}
          isActive={this.isSectionActive('sticker')}
          onClick={() => changeTool(Tools.Sticker)}
        />
        <Button
          icon={'logo'}
          isActive={this.isSectionActive('width')}
          onClick={() => changeTool('width')}
        />
        <Button
          icon={'torch'}
          isActive={this.isSectionActive('opacity')}
          onClick={() => changeTool('opacity')}
        />
      </Fragment>
    )
  }

  isSectionActive(section) {
    return this.props.selectedSection === section
  }

  render() {
    return (
      <Container>
        <Panel>{this.renderLeftSection()}</Panel>
      </Container>
    )
  }
}