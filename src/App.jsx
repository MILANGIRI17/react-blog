import './App.css'

//We can import default exportlike this.
import UserComponent, { Userkey } from "./UserComponent"

//we have to user Curly braces to import named export like this.
import { Profile,Setting } from './UserComponent'

function App() {
  return (
    <>
      <h1>React Blog</h1>
      <UserComponent/>
      <Profile/>
      <Setting/>
      <h2>{Userkey}</h2>
    </>
  )
}

export default App
