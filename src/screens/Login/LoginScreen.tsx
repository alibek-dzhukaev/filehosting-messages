import {FC, FormEvent} from 'react'

import styles from './LoginScreen.module.scss';

interface Props {
    p: string
}

export const LoginScreen: FC<Props> = () => {

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(event.currentTarget)
    }

    return (
        <form onSubmit={onSubmit} className={styles.loginScreen}>
            <div>
                <input type="text" placeholder="username" name="username"/>
            </div>
            <div>
                <input type="password" placeholder="password" name="password"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}