import React from 'react'
import { create } from 'react-test-renderer'
%import_type%

describe('Component component', () => {
  const NAME = 'Buckwheat'
  test('Has class \'hello-world\'', () => {
    const { root } = create(<Component name={NAME} />)
    expect(root.findByType('div').props.className).toEqual('hello-world')
  })

  test('Has name property', () => {
    const { root } = create(<Component name={NAME} />)
    expect(root.props.name).toEqual(NAME)
  })

  test('Matches Component innertext.', () => {
    const { root } = create(<Component name={NAME} />)
    expect(root.findByType('div').children.join('')).toEqual('Hello Buckwheat!')
  })
})
