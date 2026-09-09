import { motion } from 'framer-motion'
import {
  Laptop,
  Shirt,
  Smartphone,
  Home,
  Dumbbell,
  Sparkles,
} from 'lucide-react'

const categories = [
  {
    name: 'Electronics',
    description: 'Smart tech for everyday life',
    icon: Smartphone,
  },
  {
    name: 'Fashion',
    description: 'Find your next favorite look',
    icon: Shirt,
  },
  {
    name: 'Computers',
    description: 'Power up your productivity',
    icon: Laptop,
  },
  {
    name: 'Home & Living',
    description: 'Make your space feel yours',
    icon: Home,
  },
  {
    name: 'Fitness',
    description: 'Move better, live better',
    icon: Dumbbell,
  },
  {
    name: 'Trending',
    description: 'What everyone is shopping now',
    icon: Sparkles,
  },
]

function CategoriesSection() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--pc-primary)]">
            Explore
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--pc-text)] sm:text-4xl">
            Shop by category
          </h2>

          <p className="mt-4 text-[var(--pc-text-secondary)]">
            Explore products across the categories you love.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon

            return (
              <motion.button
                key={category.name}
                type="button"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group rounded-[var(--pc-radius-xl)] border border-[var(--pc-border)] bg-[var(--pc-surface)] p-6 text-left shadow-[var(--pc-shadow-sm)] transition-shadow hover:shadow-[var(--pc-shadow-lg)]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--pc-primary)]/10 text-[var(--pc-primary)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--pc-primary)] group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <span className="text-xl text-[var(--pc-text-muted)] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-[var(--pc-text)]">
                  {category.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--pc-text-secondary)]">
                  {category.description}
                </p>
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection