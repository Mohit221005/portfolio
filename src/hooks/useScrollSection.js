import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

const useScrollSection = (threshold = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return { ref, hasAnimated };
};

export default useScrollSection;
