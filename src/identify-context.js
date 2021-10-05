import React, { useEffect, useState } from 'react'
import netlifyidentity from 'netlify-identity-widget'



export const IdentityContext = React.createContext({})

export const Provider = (props) => {
    const [user, setuser] = useState()
    useEffect(() => {
        netlifyidentity.init({})
    })
    netlifyidentity.on("login", (user) => {
        setuser(user)
        netlifyidentity.close()
    })
    netlifyidentity.on("logout", () => {
        setuser()
    })
    return (
        <IdentityContext.Provider value={{
            identity: netlifyidentity,
            user
        }}>
            {props.children}
        </IdentityContext.Provider >
    )
}