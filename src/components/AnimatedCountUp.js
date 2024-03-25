import React, {useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const AnimatedCountUp = ({ end }) => {     // animated count up component
    const [hasAnimated, setHasAnimated] = useState(false);
    const { ref, inView } = useInView();
    
    if (inView && !hasAnimated) {
      setHasAnimated(true); // Set hasAnimated to true to prevent animation from repeating
    }
    
    return (
      <div ref={ref}>
        {hasAnimated && (
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <CountUp start={0} end={end} duration={2} />
          </motion.h1>
        )}
      </div>
    );
  };
  export default AnimatedCountUp