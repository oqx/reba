import React from 'react'
import './styles.local.scss'

interface Props {
    name: string
}

const _Component: React.FunctionComponent<Props> = ({ name }) => (<div className="hello-world">Hello {name}!</div>)

_Component.displayName = 'Component'

%export_type%
