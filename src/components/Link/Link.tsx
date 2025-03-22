import { routerService } from '@/services'
import styles from './Link.module.scss'
import classNames from 'classnames'

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ to, children, className }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); 
    routerService.navigate(to);
  };

  return (
    <a 
		href={to} 
		onClick={handleClick} 
		className={classNames(styles.link, className)}
		>
      {children}
    </a>
  );
};