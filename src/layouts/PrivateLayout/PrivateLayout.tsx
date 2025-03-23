import { FC, useEffect, useMemo } from "react"
import { PrivateRoutes } from './routes'
import { FeedScreen } from '@/screens/Feed/FeedScreen'
import { useRouter } from '@/hooks/router.hook'
import { observer } from 'mobx-react-lite'
import { FileHosting } from '@/screens/FileHosting/FileHosting'

export const PrivateLayout: FC = observer(() => {
    const { currentPath, router } = useRouter()

    useEffect(() => {
        if (currentPath === "/") {
            router.navigate(PrivateRoutes.FEED)
        }
    }, [currentPath, router])

    const component = useMemo(() => {
        return {
            [PrivateRoutes.FEED]: <FeedScreen />,
            [PrivateRoutes.FILES]: <FileHosting />
        }[currentPath] ?? <FeedScreen />    
    }, [currentPath])

    return (
        <main>{component}</main>
    )
})
