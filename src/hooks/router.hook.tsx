import {createContext, FC, ReactNode, useContext, useEffect, useState} from "react";
import {RouterService} from "@services/router";
import {routerService} from "@/services";
import {RouteHandler} from "@services/router/types";

interface RouterProviderProps {
    router: RouterService;
    children: ReactNode;
}


interface RouterContextProps {
    currentPath: string;
    router: RouterService
}

const RouterContext = createContext<RouterContextProps | null>(null)

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

export const useRouter = () => {
    const context = useContext(RouterContext);
    if (!context) {
        throw new Error('useRouter must be within a RouterProvider');
    }
    return context
}