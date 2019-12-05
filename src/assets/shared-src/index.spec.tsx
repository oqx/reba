import React from 'react'
import { create } from 'react-test-renderer'
%import_type%

describe('%component_name% component', () => {
  const NAME = 'Buckwheat'
  test('Has class \'hello-world\'', () => {
    const { root } = create(<%component_name% name={NAME} />)
    expect(root.findByType('div').props.className).toEqual('hello-world')
  })

  test('Has name property', () => {
    const { root } = create(<%component_name% name={NAME} />)
    expect(root.props.name).toEqual(NAME)
  })

  test('Matches %component_name% innertext.', () => {
    const { root } = create(<%component_name% name={NAME} />)
    expect(root.findByType('div').children.join('')).toEqual('Hello Buckwheat!')
  })
})
