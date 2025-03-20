import { useEffect, useState } from 'react'
import {authService, usersService} from './services'

const dto = {
  username: 'alibevelikiy',
  password: '12345678'
}

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  const login = async () => {
    await authService.login(dto)
      .catch(console.error)
    setLoggedIn(true)
  }

  const signup = async () => {
    await authService.signup(dto)
  }

  useEffect(() => {
    if (!loggedIn) {
      return;
    }
    usersService.getUsers()
  }, [loggedIn])
  return (
    <>
      <div>app start</div>

      <button onClick={login}>Login</button>
      <button onClick={signup}>Register</button>
    </>
  )
}

export default App
