import { motion } from "motion/react"

const name = "TravisXAmaral"

export default function Hero() {
  return (
    <div className="min-h-[50vh] lg:min-h-[70vh] flex flex-col items-center justify-center">
      <motion.div className="font-bold leading-none">
        <span className="sr-only">Travis Amaral</span>
        <h1
          className="text-5xl sm:text-[70px] md:text-[120px] lg:text-[140px] inline-block whitespace-nowrap overflow-hidden"
          arial-hidden="true"
          >
            {name.split('').map((char, idx) => (
              <motion.span
                className="inline-block"
                key={idx}
              initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ delay: idx * 0.025, duration: 1.2, ease: "0.44, 0, 0.56, 1", type: "spring", staggerChildren: 0.025 }}
              >
                {char === 'X' ? <>&nbsp;</> : char}
              </motion.span>
            ))}
          </h1>
        <div className="w-full flex justify-between text-sm">
          <motion.p initial={{y: -10, opacity: 0}} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2 }}>UI/UX Developer</motion.p>
          <motion.p initial={{y: 10, opacity: 0}} animate={{ y: 0, opacity: 1 }} transition={{ delay: .75, duration: .75 }}>2024</motion.p>
        </div>
      </motion.div>
    </div>
  )
}
