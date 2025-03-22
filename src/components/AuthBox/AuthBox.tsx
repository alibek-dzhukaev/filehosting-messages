import React from 'react'
import styles from './AuthBox.module.scss'
import { BackButton } from '../BackButton/BackButton'
import { routerService } from '@/services'

interface AuthBoxProps {
  title: string
  children: React.ReactNode

}

const AuthBox: React.FC<AuthBoxProps> = ({ title, children }) => {
  return (
    <div className={styles.authBox}>
      {routerService.canGoBack && (
        <BackButton />
      )}
      <h2>{title}</h2>
      {children}
    </div>
  )
}

export default AuthBox