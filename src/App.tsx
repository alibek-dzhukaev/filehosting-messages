import {useEffect} from "react";

import {observer} from "mobx-react-lite";


import {RouterProvider} from "@/contexts/router/RouterContext";
import {authModel} from "@/models";
import {AuthGuard} from "@components/AuthGuard/AuthGuard";

import {authService, routerService} from './services'

const App = observer(() => {

    useEffect(() => {
        void authService.me()
            .catch(console.error)
    }, [])

  return (
    <AuthGuard isAuthenticated={authModel.isAuthenticated} />
  )
})

export const fileHostingApplication = (
    <RouterProvider router={routerService}>
        <App />
    </RouterProvider>
)
