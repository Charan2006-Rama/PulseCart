import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, ShoppingBag } from 'lucide-react'
import Button from '../Button'

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--pc-primary)]/10 blur-3xl" />
      <div className="absolute right-0 top-40 -z-10 h-64 w-64 rounded-full bg-[var(--pc-secondary)]/10 blur-3xl" />

      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--pc-border)] bg-[var(--pc-surface)] px-4 py-2 text-sm font-medium text-[var(--pc-primary)] shadow-[var(--pc-shadow-sm)]"
          >
            <Sparkles size={16} />
            <span>The smarter way to shop</span>
          </motion.div>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-[var(--pc-text)] sm:text-6xl lg:text-7xl">
            Shopping that
            <span className="block bg-gradient-to-r from-[var(--pc-primary)] via-[var(--pc-secondary)] to-[var(--pc-accent)] bg-clip-text text-transparent">
              moves with you.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--pc-text-secondary)]">
            Discover products you love, compare what matters, and build your
            perfect cart with a faster, simpler shopping experience.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button className="gap-2 px-6 py-3">
              Start Shopping
              <ArrowRight size={18} />
            </Button>

            <Button variant="outline" className="gap-2 px-6 py-3">
              <Play size={17} />
              See how it works
            </Button>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-8">
            <div>
              <p className="text-2xl font-bold text-[var(--pc-text)]">10K+</p>
              <p className="text-sm text-[var(--pc-text-muted)]">
                Products
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-[var(--pc-text)]">4.9/5</p>
              <p className="text-sm text-[var(--pc-text-muted)]">
                Customer rating
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-[var(--pc-text)]">24/7</p>
              <p className="text-sm text-[var(--pc-text-muted)]">
                Shopping access
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-xl"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative mx-auto aspect-square max-w-md rounded-[3rem] bg-gradient-to-br from-[var(--pc-primary)]/15 via-[var(--pc-surface)] to-[var(--pc-secondary)]/15 p-8 shadow-[var(--pc-shadow-lg)]"
          >
            <div className="flex h-full flex-col items-center justify-center rounded-[2.5rem] border border-white/70 bg-[var(--pc-surface)]/80 p-8 backdrop-blur">
              <motion.div
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="flex h-28 w-28 items-center justify-center rounded-3xl bg-[var(--pc-primary)] text-white shadow-[var(--pc-shadow-lg)]"
              >
                <ShoppingBag size={56} strokeWidth={1.6} />
              </motion.div>

              <h2 className="mt-8 text-2xl font-bold text-[var(--pc-text)]">
                Your cart, your world.
              </h2>

              <p className="mt-3 text-center text-[var(--pc-text-secondary)]">
                Everything you need, intelligently organized in one place.
              </p>
            </div>

            <motion.div
              animate={{ y: [0, 8, 0], x: [0, 5, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -left-5 top-16 rounded-2xl border border-[var(--pc-border)] bg-[var(--pc-surface)] px-4 py-3 shadow-[var(--pc-shadow-md)]"
            >
              <p className="text-xs text-[var(--pc-text-muted)]">
                Smart pick
              </p>
              <p className="font-semibold text-[var(--pc-text)]">
                For you ✨
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0], x: [0, -5, 0] }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-4 -right-4 rounded-2xl border border-[var(--pc-border)] bg-[var(--pc-surface)] px-4 py-3 shadow-[var(--pc-shadow-md)]"
            >
              <p className="text-xs text-[var(--pc-text-muted)]">
                Cart status
              </p>
              <p className="font-semibold text-[var(--pc-success)]">
                Ready to checkout
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection