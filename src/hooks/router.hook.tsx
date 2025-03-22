import {createContext, useContext} from "react";
import {RouterService} from "@services/router";

interface RouterContextProps {
    currentPath: string;
    router: RouterService
}

export const RouterContext = createContext<RouterContextProps | null>(null)

export const useRouter = () => {
    const context = useContext(RouterContext);
    if (!context) {
        throw new Error('useRouter must be within a RouterProvider');
    }
    return context
}