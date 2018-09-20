import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Title,
  ButtonContainer,
  QuestionButton
} from './DrawingToolHeader.styles'
import { colors } from '../../DrawingTool.styles'
import Icon from 'components/Icon/Icon'
import Button from 'components/Button/Button'

export default class DrawingToolHeader extends Component {
  constructor(props) {
    super(props)

    this.renderTextHeader = this.renderTextHeader.bind(this)
    this.renderIconHeader = this.renderIconHeader.bind(this)
    this.getIconHeaderButtonProps = this.getIconHeaderButtonProps.bind(this)
    this.getTextHeaderButtonProps = this.getTextHeaderButtonProps.bind(this)
  }

  static propTypes = {
    headerStyle: PropTypes.string,
    headerTitle: PropTypes.string,
    onSave: PropTypes.func,
    onBack: PropTypes.func
  }

  getIconHeaderButtonProps() {
    return {
      bgColor: colors.translucentWhite,
      size: 'x-large',
      round: true
    }
  }

  renderIconHeader() {
    const { headerStyle, headerTitle, width, onSave, onBack } = this.props
    return (
      <Fragment>
        <ButtonContainer>
          <Button
            onClick={() => {}}
            {...this.getIconHeaderButtonProps()}
          >
            <Icon name="left" size="x-large" color={colors.white} />
          </Button>
        </ButtonContainer>
        <Title headerStyle={headerStyle} width={width}>
          {headerTitle}
        </Title>
        <ButtonContainer>
          <Button
            onClick={() => {}}
            {...this.getIconHeaderButtonProps()}
          >
            <Icon name="right" size="x-large" color={colors.white} />
          </Button>
        </ButtonContainer>
      </Fragment>
    )
  }

  getTextHeaderButtonProps() {
    return {
      size: 'large',
      color: colors.white,
      shadow: true
    }
  }

  renderTextHeader() {
    const { headerStyle, headerTitle, width, onSave, onBack } = this.props
    return (
      <Fragment>
        <ButtonContainer>
          <Button
            onClick={() => onBack()}
            {...this.getTextHeaderButtonProps()}
          >
            Back
          </Button>
        </ButtonContainer>
        <Title headerStyle={headerStyle} width={width}>
          {headerTitle}
          <QuestionButton round size="small" bgColor={colors.orange} shadow>
            <Icon name="help" size="small" />
          </QuestionButton>
        </Title>
        <ButtonContainer>
          <Button
            onClick={() => onSave()}
            {...this.getTextHeaderButtonProps()}
          >
            Save
          </Button>
        </ButtonContainer>
      </Fragment>
    )
  }

  render() {
    const { headerStyle, layoutStyle } = this.props
    return (
      <Container layoutStyle={layoutStyle}>
        {headerStyle === 'iconButtons'
          ? this.renderIconHeader()
          : this.renderTextHeader()}
      </Container>
    )
  }
}
