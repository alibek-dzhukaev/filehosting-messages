import {PrivateLayout, PublicLayout} from "@/layouts";
import {FC} from "react";

interface Props {
    isAuthenticated: boolean;
}

export const AuthGuard: FC<Props> = ({isAuthenticated}) => {
    if (isAuthenticated) {
        return (
            <PrivateLayout/>
        )
    }
    return (
        <PublicLayout/>
    )
}