import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Container, Title, ButtonContainer } from './DrawingToolHeader.styles'
import Icon from 'components/UI/Icon/Icon'
import Button from 'components/UI/Button/Button'

export default class DrawingToolHeader extends Component {
  constructor(props) {
    super(props)

    this.renderSkyHeader = this.renderSkyHeader.bind(this)
    this.renderZooHeader = this.renderZooHeader.bind(this)
  }

  static PropTypes = {
    headerType: PropTypes.string,
    headerTitle: PropTypes.string,
    onSave: PropTypes.func,
    onBack: PropTypes.func
  }

  static defaultProps = {
    headerType: 'zoo',
    headerTitle: 'Draw a magical animal!'
  }

  renderZooHeader() {
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
        <Title>{this.props.headerTitle}</Title>
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

  renderSkyHeader() {
    return (
      <Fragment>
        <ButtonContainer>
          <Button
            size="large"
            color="white"
            onClick={() => this.props.onBack()}
          >
            Back
          </Button>
        </ButtonContainer>
        <Title>{this.props.headerTitle}</Title>
        <ButtonContainer>
          <Button
            size="large"
            color="white"
            onClick={() => this.props.onSave()}
          >
            Save
          </Button>
        </ButtonContainer>
      </Fragment>
    )
  }

  render() {
    const { headerType } = this.props
    return (
      <Container>
        {headerType === 'zoo' ? this.renderZooHeader() : this.renderSkyHeader()}
      </Container>
    )
  }
}
