import {FC, ReactNode, useEffect, useState} from "react";
import {routerService} from "@/services";
import {RouteHandler} from "@services/router/types";
import {RouterService} from "@services/router";
import {RouterContext} from "@/hooks/router.hook";

interface RouterProviderProps {
    router: RouterService;
    children: ReactNode;
}

export const RouterProvider: FC<RouterProviderProps> = ({router, children}) => {
    const [currentPath, setCurrentPath] = useState(routerService.getCurrentPath())

    useEffect(() => {
        const handleRouteChange: RouteHandler = (path) => {
            setCurrentPath(path);
        };

        routerService.subscribe(handleRouteChange);
        return () => routerService.unsubscribe(handleRouteChange);
    })

    return (
        <RouterContext value={{router, currentPath}}>
            {children}
        </RouterContext>
    )
}