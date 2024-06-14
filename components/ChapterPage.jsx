import React from 'react'
import { AuroraBackground } from './ui/aurora-background';
import { motion } from 'framer-motion';

const ChapterPage = ({ mangaId }) => {

 const getManga = async() => {
    const api_url = `${process.env.NEXT_PUBLIC_DOMAIN}/api/manga/full`;
    const response = await fetch(api_url, {
     method: "POST",
     headers: {
      'Content-Type':'application/json'
     },
     
    })
  }

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
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
       <div className=' text-white'>Chapter Reading Page: {mangaId}</div>
      </motion.div>
     </AuroraBackground>
  )
}

export default ChapterPage