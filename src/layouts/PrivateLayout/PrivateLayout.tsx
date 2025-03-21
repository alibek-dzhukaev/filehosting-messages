import {FC, ReactNode} from "react";
import styles from './PrivateLayout.module.scss';

interface Props {
    children: ReactNode;
}

export const PrivateLayout: FC<Props> = ({children}) => {
    return (
        <div className={styles.privateLayout}>
            {children}
        </div>
    );
};
