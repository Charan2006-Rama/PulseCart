function Input({
  label,
  id,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  required = false,
  disabled = false,
  className = '',
}) {
  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-[var(--pc-text)]"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`w-full rounded-[var(--pc-radius-md)] border border-[var(--pc-border-strong)] bg-[var(--pc-surface)] px-4 py-2.5 text-[var(--pc-text)] outline-none transition focus:border-[var(--pc-primary)] focus:ring-2 focus:ring-[var(--pc-primary)]/20 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      />
    </div>
  )
}

export default Input