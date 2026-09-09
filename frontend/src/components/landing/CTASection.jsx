import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Button from '../Button'

function CTASection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[var(--pc-text)] px-6 py-16 text-center shadow-[var(--pc-shadow-lg)] sm:px-12"
      >
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[var(--pc-primary)] blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[var(--pc-secondary)] blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-2xl">
          <motion.div
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur"
          >
            <Sparkles size={26} />
          </motion.div>

          <h2 className="mt-7 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to shop smarter?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            Find what you need, discover something new, and make every shopping
            moment feel effortless.
          </p>

          <motion.div
            className="mt-8"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button className="gap-2 !bg-white !text-[var(--pc-text)] hover:!bg-slate-100">
              Start Shopping
              <ArrowRight size={18} />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default CTASection