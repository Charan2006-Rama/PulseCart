import { motion } from 'framer-motion'
import { ArrowUpRight, Heart, ShoppingCart } from 'lucide-react'

const products = [
  {
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: '₹2,999',
    rating: '4.8',
    icon: '🎧',
  },
  {
    name: 'Smart Watch',
    category: 'Electronics',
    price: '₹4,499',
    rating: '4.7',
    icon: '⌚',
  },
  {
    name: 'Everyday Sneakers',
    category: 'Fashion',
    price: '₹2,499',
    rating: '4.9',
    icon: '👟',
  },
  {
    name: 'Minimal Backpack',
    category: 'Fashion',
    price: '₹1,899',
    rating: '4.6',
    icon: '🎒',
  },
]

function FeaturedProducts() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--pc-secondary)]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--pc-primary)]">
              Featured
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--pc-text)] sm:text-4xl">
              Popular picks for you
            </h2>

            <p className="mt-4 max-w-xl text-[var(--pc-text-secondary)]">
              Discover some of the products shoppers are loving right now.
            </p>
          </div>

          <button
            type="button"
            className="group inline-flex items-center gap-2 font-medium text-[var(--pc-primary)]"
          >
            View all
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[var(--pc-radius-xl)] border border-[var(--pc-border)] bg-[var(--pc-surface)] shadow-[var(--pc-shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--pc-shadow-lg)]"
            >
              <div className="relative flex h-56 items-center justify-center bg-[var(--pc-surface-muted)]">
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 4 }}
                  transition={{ duration: 0.3 }}
                  className="text-7xl"
                >
                  {product.icon}
                </motion.div>

                <button
                  type="button"
                  aria-label={`Add ${product.name} to wishlist`}
                  className="absolute right-4 top-4 rounded-full bg-[var(--pc-surface)] p-2.5 text-[var(--pc-text-secondary)] shadow-[var(--pc-shadow-sm)] transition hover:text-[var(--pc-danger)]"
                >
                  <Heart size={18} />
                </button>
              </div>

              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-[var(--pc-text-muted)]">
                  {product.category}
                </p>

                <h3 className="mt-2 text-lg font-semibold text-[var(--pc-text)]">
                  {product.name}
                </h3>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-sm text-[var(--pc-warning)]">
                    ★
                  </span>

                  <span className="text-sm text-[var(--pc-text-secondary)]">
                    {product.rating}
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <p className="text-xl font-bold text-[var(--pc-text)]">
                    {product.price}
                  </p>

                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    aria-label={`Add ${product.name} to cart`}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--pc-primary)] text-white transition-colors hover:bg-[var(--pc-primary-dark)]"
                  >
                    <ShoppingCart size={18} />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts