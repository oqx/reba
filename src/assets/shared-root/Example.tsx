import React from 'react'
import { render } from 'react-dom'
%import_src_type%

const NODE = document.querySelector('#app')

render(<%component_name% name="Harold" />, NODE)
