"use client";

import React from "react";
import { motion } from "motion/react";

function TextAnimation() {
  return (
    <div>
      <motion.div
        initial={{ x: -500 }}
        animate={{ x: -10 }}
        transition={{ duration: 1, type: "tween" }}
      >
        <div className="text-3xl font-bold uppercase text-[#ff2994] tracking-widest underline ">
          Height Animation
        </div>
        <div></div>
      </motion.div>

      <motion.div
        initial={{ x: -500 }}
        animate={{ x: -10 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <div className="text-3xl font-bold uppercase text-[#ff2994] tracking-widest underline ">
          Height Animation
        </div>
        <div></div>
      </motion.div>
    </div>
  );
}

export default TextAnimation;
