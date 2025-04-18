import type {FC} from "react";

import {PrivateLayout, PublicLayout} from "@/layouts";

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