import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Container, Title, ButtonContainer, QuestionButton } from './DrawingToolHeader.styles'
import Icon from 'components/UI/Icon/Icon'
import Button from 'components/UI/Button/Button'

export default class DrawingToolHeader extends Component {
  constructor(props) {
    super(props)

    this.renderTextHeader = this.renderTextHeader.bind(this)
    this.renderIconHeader = this.renderIconHeader.bind(this)
  }

  static propTypes = {
    headerStyle: PropTypes.string,
    headerTitle: PropTypes.string,
    onSave: PropTypes.func,
    onBack: PropTypes.func
  }

  renderIconHeader() {
    const { headerStyle, headerTitle, onSave, onBack } = this.props
    return (
      <Fragment>
        <ButtonContainer>
          <Button
            bgColor="rgba(250,250,250, 0.6)"
            size="x-large"
            round
            onClick={() => {}}
          >
            <Icon name="left" size="x-large" color="white" />
          </Button>
        </ButtonContainer>
        <Title headerStyle={headerStyle}>{headerTitle}</Title>
        <ButtonContainer>
          <Button
            bgColor="rgba(250,250,250, 0.6)"
            size="x-large"
            round
            onClick={() => {}}
          >
            <Icon name="right" size="x-large" color="white" />
          </Button>
        </ButtonContainer>
      </Fragment>
    )
  }

  renderTextHeader() {
    const { headerStyle, headerTitle, onSave, onBack } = this.props
    return (
      <Fragment>
        <ButtonContainer>
          <Button
            size="large"
            color="white"
            onClick={() => onBack()}
          >
            Back
          </Button>
        </ButtonContainer>
        <Title headerStyle={headerStyle}>{headerTitle}
        <QuestionButton round size="small">
          <Icon name="help" size="small" />
        </QuestionButton>
        </Title>
        <ButtonContainer>
          <Button
            size="large"
            color="white"
            onClick={() => onSave()}
          >
            Save
          </Button>
        </ButtonContainer>
      </Fragment>
    )
  }

  render() {
    const { headerStyle } = this.props
    return (
      <Container>
        {headerStyle === 'iconButtons' ? this.renderIconHeader() : this.renderTextHeader()}
      </Container>
    )
  }
}
