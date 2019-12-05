import React from 'react'
import PropTypes from 'prop-types'
import './styles.local.scss'

const _%component_name% = ({ name }) => <div className="hello-world">Hello {name}!</div>

_%component_name%.displayName = '%component_name%'

_%component_name%.propTypes = {
    name: PropTypes.string.isRequired
}

%export_type%
