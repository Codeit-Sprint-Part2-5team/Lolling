import { throttle } from 'lodash';
import { useEffect, useState } from 'react';

const THROTTLE_WAIT = 300;

export default function useInfiniteScroll(fetchCallback) {
  const [isFetching, setIsFetching] = useState(false);

  const handleScrollThrottle = throttle(() => {
    const isScrollOver =
      window.innerHeight + document.documentElement.scrollTop + 50 >=
      document.documentElement.offsetHeight;
    if (isScrollOver) {
      setIsFetching(true);
    }
  }, THROTTLE_WAIT);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollThrottle);
    return () => {
      window.removeEventListener('scroll', handleScrollThrottle);
    };
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    fetchCallback();
  }, [isFetching]);

  return [setIsFetching];
}
