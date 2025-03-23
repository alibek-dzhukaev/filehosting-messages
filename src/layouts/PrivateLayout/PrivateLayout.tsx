import { FC, useEffect, useMemo } from "react"
import { PrivateRoutes } from './routes'
import { FeedScreen } from '@/screens/Feed/FeedScreen'
import { useRouter } from '@/hooks/router.hook'
import { observer } from 'mobx-react-lite'
import { FileHosting } from '@/screens/FileHosting/FileHosting'
import {ProfileScreen} from "@screens/Profile/ProfileScreen";

export const PrivateLayout: FC = observer(() => {
    const { currentPath, router } = useRouter()

    useEffect(() => {
        if (currentPath === "/") {
            router.navigate(PrivateRoutes.FEED)
        }
    }, [currentPath, router])

    const component = useMemo(() => {
        switch (true) {
            case currentPath.startsWith(PrivateRoutes.FEED):
                return <FeedScreen />
            case currentPath.startsWith(PrivateRoutes.FILES):
                return <FileHosting />
            case currentPath.startsWith(PrivateRoutes.PROFILE):
                return <ProfileScreen />
        }
    }, [currentPath])

    return (
        <main>{component}</main>
    )
})
