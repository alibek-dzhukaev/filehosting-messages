import {authService, routerService} from './services'
import {observer} from "mobx-react-lite";
import {authModel} from "@/models";
import {AuthGuard} from "@components/AuthGuard/AuthGuard";
import {useRouter} from "@/hooks/router.hook";
import {RouterProvider} from "@/contexts/router/RouterContext";

const dto = {
  username: 'alibevelikiy',
  password: '12345678'
}

const App = observer(() => {
    const {router} = useRouter();

  const login = async () => {
    await authService.login(dto)
      .catch(console.error)
  }

  const signup = async () => {
    await authService.signup(dto)
  }

  return (
    <AuthGuard isAuthenticated={authModel.isAuthenticated}>
        <button onClick={router.goBack}>Back</button>

      <div style={{fontSize: "5em"}}>isAuth:</div>
      <div style={{fontSize: "5em"}}>{JSON.stringify(authModel.isAuthenticated)}</div>


      <button onClick={login}>Login</button>
      <button onClick={signup}>Register</button>
    </AuthGuard>
  )
})

export const fileHostingApplication = (
    <RouterProvider router={routerService}>
        <App />
    </RouterProvider>
)
