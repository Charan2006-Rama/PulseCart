import Button from './components/Button'
import Card from './components/Card'
import Input from './components/Input'
import Navbar from './components/Navbar'
import Section from './components/Section'

function App() {
  return (
    <div className="min-h-screen bg-[var(--pc-background)]">
      <Navbar />

      <Section>
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--pc-primary)]">
            PulseCart Design System
          </p>

          <h1 className="text-4xl font-bold text-[var(--pc-text)]">
            UI Foundation
          </h1>

          <p className="mt-3 max-w-2xl text-[var(--pc-text-secondary)]">
            Reusable components and design tokens for the PulseCart
            application.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card hover>
            <h2 className="text-xl font-semibold text-[var(--pc-text)]">
              Buttons
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-[var(--pc-text)]">
              Input
            </h2>

            <div className="mt-5">
              <Input
                id="demo-email"
                label="Email address"
                type="email"
                placeholder="Enter your email"
              />
            </div>
          </Card>
        </div>
      </Section>
    </div>
  )
}

export default App