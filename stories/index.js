import React from 'react'
import { storiesOf } from '@storybook/react'

import DrawingTool from '../DrawingTool'
import OpacitySlider from '../components/OpacitySlider/OpacitySlider'
import WidthSlider from '../components/WidthSlider/WidthSlider'
import Button from '../components/Button/Button'

  storiesOf("DrawingTool", module)
  .add("Default", () => (
    <DrawingTool />
  ))

  storiesOf('DrawingTool', module)
  .add('OpacitySlider', () => (
    <OpacitySlider value={1} height={300} width={30} thumbColor={'#FEFC39'} />
  ))

  storiesOf('DrawingTool', module)
  .add('WidthSlider', () => (
    <WidthSlider value={20} height={300} width={30} thumbColor={'#FEFC39'} />
  ))

  storiesOf("DrawingTool", module)
  .add("Button", () => (
    <Button>Save</Button>
  ))