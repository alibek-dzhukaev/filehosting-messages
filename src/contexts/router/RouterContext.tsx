import type { FC, ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { RouterContext } from '@/hooks/router.hook';
import { routerService } from '@/services';

import type { RouterService } from '@services/router';
import type { RouteHandler } from '@services/router/types';

interface RouterProviderProps {
  router: RouterService;
  children: ReactNode;
}

export const RouterProvider: FC<RouterProviderProps> = ({ router, children }) => {
  const [currentPath, setCurrentPath] = useState(routerService.getCurrentPath());

  useEffect(() => {
    const handleRouteChange: RouteHandler = (path) => {
      setCurrentPath(path);
    };

    routerService.subscribe(handleRouteChange);

    return () => routerService.unsubscribe(handleRouteChange);
  });

  return <RouterContext value={{ router, currentPath }}>{children}</RouterContext>;
};
