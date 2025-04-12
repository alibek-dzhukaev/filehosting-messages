import {authService, routerService} from './services'
import {observer} from "mobx-react-lite";
import {authModel} from "@/models";
import {AuthGuard} from "@components/AuthGuard/AuthGuard";
import {RouterProvider} from "@/contexts/router/RouterContext";
import {useEffect} from "react";


const App = observer(() => {

    useEffect(() => {
        void authService.me()
            .catch(console.error)
    }, [])

  return (
    <AuthGuard isAuthenticated={authModel.isAuthenticated}>

    </AuthGuard>
  )
})

export const fileHostingApplication = (
    <RouterProvider router={routerService}>
        <App />
    </RouterProvider>
)
