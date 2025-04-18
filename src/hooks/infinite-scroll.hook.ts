import { useEffect, useState } from 'react';

export const useInfiniteScroll = (loadMore: () => Promise<void>) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        setIsFetching(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isFetching) {
      void loadMore().finally(() => setIsFetching(false));
    }
  }, [isFetching, loadMore]);

  return { isFetching };
};
