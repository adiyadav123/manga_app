import React from "react";
import { AuroraBackground } from "./ui/aurora_background";
import { motion } from "framer-motion";

const ChapterHead = ({ mangaId }) => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 h-screen w-screen backdrop-blur-[10px]"
      >
        <div className="text-3xl font-bold text-white dark:text-white">
          Chapter 1
        </div>
        <div className="text-lg text-white dark:text-white">
          {mangaId}
          <p>Still under development...</p>
  <p>Sorry for the inconvenience caused, we are taking time to complete the project because there is a slight change in the API. </p>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default ChapterHead;
