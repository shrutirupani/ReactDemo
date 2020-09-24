import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

test('full app rendering/navigating', () => {
  const history = createMemoryHistory()
  const { container, getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  )
 
  expect(container.innerHTML).toMatch('You are home')

  fireEvent.click(getByText(/Mercedes/i))
  expect(container.innerHTML).toMatch('Mercedes Page')
  fireEvent.click(getByText(/Ferrari/i))
  expect(container.innerHTML).toMatch('Ferrari Page')
  fireEvent.click(getByText(/Porsche/i))
  expect(container.innerHTML).toMatch('Porsche Page')
  fireEvent.click(getByText(/Lamborghini/i))
  expect(container.innerHTML).toMatch('Lamborghini Page')
})