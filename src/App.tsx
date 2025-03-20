import { useEffect, useState } from 'react'
import { authService, usersService } from './services'

const dto = {
  username: 'alibedzhukaev',
  password: '12345678'
}

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)


  const signin = async () => {
    await authService.signin(dto)
      .catch(console.error)
    setLoggedIn(true)
  }

  const signup = async () => {
    await authService.signup(dto)
  }

  useEffect(() => {
    if (loggedIn === false) {
      return;
    }
    usersService.getUsers()
  }, [loggedIn])
  return (
    <>
      <div>app start</div>

      <button onClick={signin}>Login</button>
      <button onClick={signup}>Register</button>
    </>
  )
}

export default App
