import * as React from "react"
import netlifyidentity from 'netlify-identity-widget'
import { Link } from "gatsby"
import { IdentityContext } from './../identify-context'
const IndexPage = () => {
  const { user, identity } = React.useContext(IdentityContext)
  return (
    <div>
      {user && <div style={{
        display: 'flex',
      }}>
        <div>Home</div>
        <Link to='/app' >Dashbord</Link>
        {user && <div>{user.user_metadata.full_name}</div>}
      </div>}
      <h1>gatsby todo app</h1>
      <button onClick={() => identity.open()}>login</button>
      <button onClick={() => console.log(netlifyidentity.currentUser())}>current user</button>
    </div >
  )
}

export default IndexPage
