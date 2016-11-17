import 'babel-polyfill'
import 'uswds'
import React from 'react'
import { render } from 'react-dom'
import AppWrapper from './components/AppWrapper'

render(
  <AppWrapper />,
  document.getElementById('root')
)
