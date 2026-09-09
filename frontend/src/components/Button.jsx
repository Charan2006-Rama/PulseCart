import { motion } from 'framer-motion'

function Button({
  children,
  variant = 'primary',
  type = 'button',
  onClick,
  disabled = false,
  className = '',
}) {
  const variants = {
    primary:
      'bg-[var(--pc-primary)] text-white hover:bg-[var(--pc-primary-dark)]',
    secondary:
      'bg-[var(--pc-surface-muted)] text-[var(--pc-text)] hover:bg-[var(--pc-border)]',
    outline:
      'border border-[var(--pc-border-strong)] bg-transparent text-[var(--pc-text)] hover:bg-[var(--pc-surface-muted)]',
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`inline-flex items-center justify-center rounded-[var(--pc-radius-md)] px-5 py-2.5 font-medium shadow-[var(--pc-shadow-sm)] transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  )
}

export default Button