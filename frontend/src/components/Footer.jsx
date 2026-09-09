import { Mail, ShoppingCart } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t border-[var(--pc-border)] bg-[var(--pc-surface)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">

          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-xl font-bold text-[var(--pc-primary)]">
              <ShoppingCart size={24} />
              <span>PulseCart</span>
            </div>

            <p className="mt-4 max-w-md text-sm leading-6 text-[var(--pc-text-secondary)]">
              A faster, simpler shopping experience designed to help you
              discover products and shop with confidence.
            </p>

            <div className="mt-5 flex gap-3">
              <button
                type="button"
                aria-label="Email"
                className="rounded-full border border-[var(--pc-border)] p-2.5 text-[var(--pc-text-secondary)] transition hover:text-[var(--pc-primary)]"
              >
                <Mail size={18} />
              </button>

              <button
                type="button"
                aria-label="Contact"
                className="rounded-full border border-[var(--pc-border)] p-2.5 text-[var(--pc-text-secondary)] transition hover:text-[var(--pc-primary)]"
              >
                <Mail size={18} />
              </button>

              <button
                type="button"
                aria-label="Support"
                className="rounded-full border border-[var(--pc-border)] p-2.5 text-[var(--pc-text-secondary)] transition hover:text-[var(--pc-primary)]"
              >
                <Mail size={18} />
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--pc-text)]">
              Shop
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--pc-text-secondary)]">
              <a href="/products">All Products</a>
              <a href="/products">Electronics</a>
              <a href="/products">Fashion</a>
              <a href="/products">Trending</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--pc-text)]">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--pc-text-secondary)]">
              <a href="/about">About Us</a>
              <a href="/contact">Contact</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms & Conditions</a>
            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-[var(--pc-border)] pt-6 text-center text-sm text-[var(--pc-text-muted)]">
          © {new Date().getFullYear()} PulseCart. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer