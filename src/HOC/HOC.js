import { navigate } from 'gatsby-link'
import React, { useContext } from 'react'
import { IdentityContext } from '../identify-context'
const HOC = ({ componrnt: Component, path, ...rest }) => {
    const { user } = useContext(IdentityContext)
    if (!user) {
        navigate('/')
        return null
    }
    return <Component  {...rest} />
}

export default HOC
