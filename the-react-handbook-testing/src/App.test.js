import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from './App'

test('App works', () => {
  const { container } = render(<App />)
  console.log(container)
  const buttons = container.querySelectorAll('button')

  expect(buttons[0].textContext).toBe('+1')
  expect(buttons[1].textContext).toBe('+10')
  expect(buttons[2].textContext).toBe('+100')
  expect(buttons[3].textContext).toBe('+1000')

  const result = container.querySelector('span')
  expect(result.textContext).toBe('0')
  fireEvent.click(buttons[0])
  expect(result.textContext).toBe('1')
  fireEvent.click(buttons[1])
  expect(result.textContext).toBe('11')
  fireEvent.click(buttons[2])
  expect(result.textContext).toBe('111')
  fireEvent.click(buttons[3])
  expect(result.textContext).toBe('1111')
  fireEvent.click(buttons[2])
  expect(result.textContext).toBe('1211')
  fireEvent.click(buttons[1])
  expect(result.textContext).toBe('1221')
  fireEvent.click(buttons[0])
  expect(result.textContext).toBe('1222')
})


// test('First test', () => {
//   expect(true).toBeTruthy()
// })

// test('Second test', () => {
//   expect(false).toBeFalsy()
// })