import {PrivateLayout, PublicLayout} from "@/layouts";
import {FC, ReactNode} from "react";

interface Props {
    children: ReactNode;
    isAuthenticated: boolean;
}

export const AuthGuard: FC<Props> = ({
                                         children,
                                         isAuthenticated
                                     }) => {

    if (isAuthenticated) {
        return (
            <PrivateLayout>
                {children}
            </PrivateLayout>
        )
    }

    return (
        <PublicLayout>
            {children}
        </PublicLayout>
    )
}