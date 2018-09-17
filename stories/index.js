import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import DrawingTool from '../DrawingTool'
import OpacitySlider from '../components/OpacitySlider/OpacitySlider'
import WidthSlider from '../components/WidthSlider/WidthSlider'
import Button from '../components/Button/Button'
import ColorButton from '../components/ColorButton/ColorButton'

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
    <Button icon={'pencil'}/>
  ))

  storiesOf("DrawingTool", module)
  .add("Color Button", () => (
    <ColorButton color={'#FBA638'}/>
  ))