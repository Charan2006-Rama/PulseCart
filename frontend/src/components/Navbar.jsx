import { ShoppingCart, User } from 'lucide-react'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--pc-border)] bg-[var(--pc-surface)]/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-[var(--pc-primary)]"
        >
          <ShoppingCart size={24} />
          <span>PulseCart</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="text-sm font-medium text-[var(--pc-text-secondary)] transition hover:text-[var(--pc-primary)]"
          >
            Home
          </a>

          <a
            href="/products"
            className="text-sm font-medium text-[var(--pc-text-secondary)] transition hover:text-[var(--pc-primary)]"
          >
            Products
          </a>

          <a
            href="/about"
            className="text-sm font-medium text-[var(--pc-text-secondary)] transition hover:text-[var(--pc-primary)]"
          >
            About
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Shopping cart"
            className="rounded-[var(--pc-radius-md)] p-2 text-[var(--pc-text-secondary)] transition hover:bg-[var(--pc-surface-muted)] hover:text-[var(--pc-primary)]"
          >
            <ShoppingCart size={20} />
          </button>

          <button
            type="button"
            aria-label="User account"
            className="rounded-[var(--pc-radius-md)] p-2 text-[var(--pc-text-secondary)] transition hover:bg-[var(--pc-surface-muted)] hover:text-[var(--pc-primary)]"
          >
            <User size={20} />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar