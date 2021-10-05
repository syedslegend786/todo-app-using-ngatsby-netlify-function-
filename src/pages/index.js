import * as React from "react"
import netlifyidentity from 'netlify-identity-widget'
const IndexPage = () => {
  React.useEffect(() => {
    netlifyidentity.init({})
  })
  return (
    <div>
      <h1>gatsby todo app</h1>
      <button onClick={() => netlifyidentity.open()}>login</button>
      <button onClick={() => console.log(netlifyidentity.currentUser())}>current user</button>
    </div>
  )
}

export default IndexPage
