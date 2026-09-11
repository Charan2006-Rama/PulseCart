import { Routes, Route, Link } from 'react-router-dom'
import { useAuth } from './context/AuthContext'

import Navbar from './components/Navbar'
import HeroSection from './components/landing/HeroSection'
import CategoriesSection from './components/landing/CategoriesSection'
import FeaturedProducts from './components/landing/FeaturedProducts'
import CTASection from './components/landing/CTASection'
import Footer from './components/Footer'
import Register from './pages/auth/Register'
import Login from './pages/auth/login'
import ProtectedRoute from './components/ProtectedRoute'
import RoleProtectedRoute from './components/RoleProtectedRoute'

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <CategoriesSection />
        <FeaturedProducts />
        <CTASection />
      </main>

      <Footer />
    </>
  )
}

function Account() {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--pc-background)] px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
        <h1 className="text-2xl font-bold text-[var(--pc-text)]">
          My Account
        </h1>

        <p className="mt-2 text-[var(--pc-text-secondary)]">
          Welcome, {user?.sub}
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <Link
            to="/"
            className="inline-flex rounded-lg bg-[var(--pc-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Back to Home
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex rounded-lg bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

function AdminTest() {
  const { user, logout } = useAuth()

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--pc-background)] px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
        <h1 className="text-2xl font-bold text-[var(--pc-text)]">
          Admin Test Page
        </h1>

        <p className="mt-2 text-[var(--pc-text-secondary)]">
          This page is protected for ADMIN users only.
        </p>

        <p className="mt-4 text-sm text-[var(--pc-text-secondary)]">
          Logged in as: {user?.sub}
        </p>

        <p className="mt-1 text-sm font-semibold text-[var(--pc-primary)]">
          Role: {user?.role}
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <Link
            to="/"
            className="inline-flex rounded-lg bg-[var(--pc-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Back to Home
          </Link>

          <button
            type="button"
            onClick={logout}
            className="inline-flex rounded-lg bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[var(--pc-background)]">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/account" element={<Account />} />
        </Route>

        <Route
          element={
            <RoleProtectedRoute allowedRoles={['ADMIN']} />
          }
        >
          <Route
            path="/admin-test"
            element={<AdminTest />}
          />
        </Route>
      </Routes>
    </div>
  )
}

export default App