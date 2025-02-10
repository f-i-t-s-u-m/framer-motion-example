import { motion } from "framer-motion";

export default function Hero() {
  const heroHeaderAnimation = {
    initial: {
      fontSize: "50em",
    },
    visible: {
      fontSize: "10em",
      transition: {
        duration: 0.5,
        type: "tween",
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center py-2 h-[calc(100vh-170px)]">
      <motion.h1
        variants={heroHeaderAnimation}
        animate="visible"
        initial="initial"
        className="text-[#ff2994] font-xl font-bold"
      >
        Hello World
      </motion.h1>
    </div>
  );
}
