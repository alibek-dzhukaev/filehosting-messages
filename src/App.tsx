import {authService} from './services'
import {observer} from "mobx-react-lite";
import {authModel} from "@/models";

const dto = {
  username: 'alibevelikiy',
  password: '12345678'
}

const App = observer(() => {
  const login = async () => {
    await authService.login(dto)
      .catch(console.error)
  }

  const signup = async () => {
    await authService.signup(dto)
  }

  return (
    <>
      <div style={{fontSize: "5em"}}>isAuth:</div>
      <div style={{fontSize: "5em"}}>{JSON.stringify(authModel.isAuthenticated)}</div>


      <button onClick={login}>Login</button>
      <button onClick={signup}>Register</button>
    </>
  )
})

export default App
