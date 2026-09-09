import { motion } from 'framer-motion'

function Card({
  children,
  className = '',
  hover = false,
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.2 }}
      className={`rounded-[var(--pc-radius-lg)] border border-[var(--pc-border)] bg-[var(--pc-surface)] p-6 shadow-[var(--pc-shadow-sm)] ${
        hover ? 'transition-shadow hover:shadow-[var(--pc-shadow-md)]' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default Card