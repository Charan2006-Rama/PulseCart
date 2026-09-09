function Section({
  children,
  id,
  className = '',
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </section>
  )
}

export default Section