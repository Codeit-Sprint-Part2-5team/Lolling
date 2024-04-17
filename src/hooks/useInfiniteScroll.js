import { throttle } from 'lodash';
import { useEffect } from 'react';

const THROTTLE_WAIT = 300;

export default function useInfiniteScroll(callback) {
  const [isFetching, setIsFetching] = useState(false);

  const handleScrollThrottle = throttle(() => {
    const isScrollOver =
      window.innerHeight + document.documentElement.scrollTop >=
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
    callback();
  }, [isFetching]);

  return [isFetching, setIsFetching];
}
