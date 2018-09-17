import { configure } from '@storybook/react'

function loadStories() {
  require('../stories')
}

// Or
// const req = require.context('../', true, /\.stories\.js$/)
// function loadStories() {
//   req.keys().forEach((filename) => req(filename))
// }

configure(loadStories, module)
