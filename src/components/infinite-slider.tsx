// components/InfiniteSlider.tsx
import { motion } from "framer-motion";

interface InfiniteSliderProps {
  items: React.ReactNode[]; // Array of items to display in the slider
  speed?: number; // Control the speed of the slide
}

const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  items,
  speed = 10,
}) => {
  return (
    <div className="overflow-hidden w-full whitespace-nowrap">
      <motion.div
        className="flex gap-8"
        animate={{ x: ["0%", "-50%"] }} // Start at 0% and move to -50%
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        }}
      >
        {/* Duplicate items array multiple times for seamless looping */}
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="inline-block">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteSlider;
