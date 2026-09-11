import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  UserPlus,
  ShoppingBag,
  ShoppingCart,
  ShieldCheck,
  Truck,
  Sparkles,
  ArrowRight,
  Heart,
  Tag,
  Star,
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  Headphones,
  RotateCcw,
} from 'lucide-react'

import Card from '../../components/Card'
import api from '../../services/api'

const formContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
}

const formItem = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
    },
  },
}

function Register() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }))

    setError('')
    setSuccess('')
  }

  const validateForm = () => {
    if (!form.firstName.trim()) {
      return 'First name is required'
    }

    if (form.firstName.trim().length < 2) {
      return 'First name must be at least 2 characters'
    }

    if (!form.lastName.trim()) {
      return 'Last name is required'
    }

    if (form.lastName.trim().length < 2) {
      return 'Last name must be at least 2 characters'
    }

    if (!form.email.trim()) {
      return 'Email is required'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return 'Please enter a valid email address'
    }

    if (!form.phone.trim()) {
      return 'Phone number is required'
    }

    if (!/^[0-9+()\- ]{7,20}$/.test(form.phone)) {
      return 'Please enter a valid phone number'
    }

    if (!form.password) {
      return 'Password is required'
    }

    if (form.password.length < 8) {
      return 'Password must contain at least 8 characters'
    }

    if (form.password !== form.confirmPassword) {
      return 'Passwords do not match'
    }

    return ''
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setError('')
    setSuccess('')

    const validationError = validateForm()

    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)

    try {
      await api.post('/auth/register', {
        name: `${form.firstName.trim()} ${form.lastName.trim()}`,
        email: form.email.trim(),
        phone: form.phone.trim(),
        password: form.password,
      })

      setSuccess(
        'Account created successfully! Redirecting to login...',
      )

      setTimeout(() => {
        navigate('/login')
      }, 1200)
    } catch (requestError) {
      const message =
        requestError.response?.data?.message ||
        'Registration failed. Please try again.'

      setError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-100/50 px-3 py-3 sm:px-5">

      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================== */}

      <motion.div
        className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full border-[38px] border-blue-200/30"
        animate={{
          rotate: [0, 8, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="pointer-events-none absolute -bottom-28 -right-24 h-72 w-72 rounded-full border-[38px] border-indigo-200/30"
        animate={{
          rotate: [0, -8, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* =========================================================
          MAIN CARD
      ========================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.98,
          y: 10,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.55,
          ease: 'easeOut',
        }}
        className="relative z-10 w-full max-w-[1320px]"
      >
        <Card className="overflow-hidden rounded-[26px] border border-white/80 bg-white p-0 shadow-[0_20px_65px_rgba(37,99,235,0.15)]">

          <div className="grid min-h-[680px] lg:grid-cols-2">

            {/* =====================================================
                LEFT PANEL
            ====================================================== */}

            <div className="relative hidden overflow-hidden bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-600 px-8 py-7 text-white lg:flex lg:flex-col">

              {/* Background circles */}

              <motion.div
                className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/10"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
              />

              <motion.div
                className="absolute -bottom-36 -left-20 h-72 w-72 rounded-full bg-white/10"
                animate={{
                  scale: [1, 1.08, 1],
                  x: [0, 15, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                }}
              />

              {/* =================================================
                  BRAND
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="relative z-10 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">

                  <motion.div
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 shadow-md backdrop-blur-sm"
                  >
                    <ShoppingBag size={24} />
                  </motion.div>

                  <div>
                    <h2 className="text-xl font-extrabold tracking-tight">
                      PulseCart
                    </h2>

                    <p className="text-[9px] font-semibold tracking-[0.28em] text-white/75">
                      SHOP • SAVE • SMILE
                    </p>
                  </div>
                </div>

                <span className="text-[9px] font-semibold tracking-[0.2em] text-white/70">
                  SHOP SMARTER
                </span>
              </motion.div>

              {/* =================================================
                  HEADING
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                }}
                className="relative z-10 mt-7"
              >
                <p className="mb-1.5 text-[10px] font-semibold tracking-wider text-white/65">
                  YOUR SHOPPING JOURNEY STARTS HERE
                </p>

                <h2 className="text-[38px] font-black leading-[1.02] tracking-tight">
                  Welcome to
                  <br />

                  <span className="bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent">
                    PulseCart
                  </span>
                </h2>

                <p className="mt-3 max-w-sm text-xs leading-5 text-white/75">
                  Create your account and discover a smarter,
                  simpler way to shop everything you need.
                </p>

                <motion.div
                  animate={{
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                  className="mt-3"
                >
                  <p className="font-serif text-base italic text-white/90">
                    Shop smarter.
                    <br />

                    <span className="ml-4">
                      Live better.
                    </span>
                  </p>

                  <div className="ml-5 mt-0.5 h-0.5 w-16 rotate-[-5deg] rounded-full bg-cyan-200" />
                </motion.div>
              </motion.div>

              {/* =================================================
                  CART ILLUSTRATION
              ================================================== */}

              <div className="relative z-10 flex flex-1 items-center justify-center">

                {/* Glow */}

                <motion.div
                  className="absolute h-40 w-40 rounded-full bg-white/10 blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />

                {/* Platform */}

                <motion.div
                  animate={{
                    scaleX: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute bottom-8 h-5 w-64 rounded-[50%] bg-white/20"
                />

                {/* Cart */}

                <motion.div
                  animate={{
                    y: [0, -7, 0],
                    rotate: [0, 1, 0, -1, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative h-32 w-48"
                >
                  {/* Handle */}

                  <div className="absolute left-0 top-3 h-16 w-14 rounded-tl-3xl border-l-[6px] border-t-[6px] border-white/90" />

                  {/* Basket */}

                  <div className="absolute left-7 top-9 h-[72px] w-[142px] rounded-b-[28px] border-[6px] border-white/90 bg-white/10" />

                  {/* Basket lines */}

                  <div className="absolute left-9 top-[59px] h-1 w-[126px] rotate-[4deg] rounded-full bg-white/60" />

                  <div className="absolute left-11 top-[76px] h-1 w-[118px] rotate-[4deg] rounded-full bg-white/50" />

                  {/* Base */}

                  <div className="absolute bottom-1 left-7 h-1.5 w-[142px] rounded-full bg-white/90" />

                  {/* Wheels */}

                  <div className="absolute bottom-[-8px] left-[52px] flex gap-[70px]">
                    <span className="h-6 w-6 rounded-full border-4 border-white bg-blue-500" />
                    <span className="h-6 w-6 rounded-full border-4 border-white bg-blue-500" />
                  </div>

                  {/* Products */}

                  <motion.div
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute left-[51px] top-2 h-12 w-9 rotate-[-5deg] rounded-md bg-orange-300 shadow-md"
                  />

                  <motion.div
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 2.3,
                      repeat: Infinity,
                      delay: 0.2,
                    }}
                    className="absolute left-[78px] top-[-3px] h-14 w-9 rotate-[4deg] rounded-md bg-pink-300 shadow-md"
                  />

                  {/* Heart */}

                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute right-[-3px] top-8 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-pink-500 shadow-lg"
                  >
                    <Heart size={19} fill="currentColor" />
                  </motion.div>
                </motion.div>

                {/* Discount */}

                <motion.div
                  animate={{
                    y: [0, -7, 0],
                    rotate: [-2, 0, -2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute left-0 top-12 flex items-center gap-2 rounded-xl bg-white px-2.5 py-2 text-slate-800 shadow-lg"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <Tag size={14} />
                  </div>

                  <div>
                    <p className="text-[8px] text-slate-400">
                      SPECIAL
                    </p>

                    <p className="text-[10px] font-bold">
                      Big Deals
                    </p>
                  </div>
                </motion.div>

                {/* Star */}

                <motion.div
                  animate={{
                    y: [0, 6, 0],
                    rotate: [4, 0, 4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute bottom-12 right-2 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-amber-400 shadow-lg"
                >
                  <Star size={19} fill="currentColor" />
                </motion.div>

                {/* Sparkle */}

                <motion.div
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute right-16 top-8 text-white"
                >
                  <Sparkles size={18} />
                </motion.div>
              </div>

              {/* =================================================
                  FEATURES
              ================================================== */}

              <div className="relative z-10 space-y-2">

                <motion.div
                  whileHover={{
                    x: 4,
                  }}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-3 py-2 backdrop-blur-sm"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-400">
                    <ShieldCheck size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-bold">
                      Secure Shopping
                    </p>

                    <p className="text-[9px] text-white/60">
                      Your account stays protected
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{
                    x: 4,
                  }}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-3 py-2 backdrop-blur-sm"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-400">
                    <Truck size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-bold">
                      Fast & Reliable
                    </p>

                    <p className="text-[9px] text-white/60">
                      Shop with confidence
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{
                    x: 4,
                  }}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-3 py-2 backdrop-blur-sm"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-400">
                    <Sparkles size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-bold">
                      Better Experience
                    </p>

                    <p className="text-[9px] text-white/60">
                      Personalized shopping made easy
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Happy shoppers */}

              <div className="relative z-10 mt-3 flex items-center justify-between">

                <div className="flex items-center gap-2">
                  <div className="h-px w-4 bg-white/50" />

                  <span className="text-[9px] text-white/75">
                    Join thousands of happy shoppers!
                  </span>
                </div>

                <div className="flex items-center">

                  {['A', 'R', 'S', 'K'].map((letter, index) => (
                    <motion.div
                      key={letter}
                      animate={{
                        y: [0, -2, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.15,
                      }}
                      className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[9px] font-bold ${
                        index === 0
                          ? 'bg-orange-400'
                          : index === 1
                            ? 'bg-pink-400'
                            : index === 2
                              ? 'bg-emerald-400'
                              : 'bg-purple-400'
                      } ${index !== 0 ? '-ml-2' : ''}`}
                    >
                      {letter}
                    </motion.div>
                  ))}

                  <div className="-ml-1 flex h-7 items-center rounded-full bg-white px-2 text-[10px] font-bold text-blue-600">
                    10K+
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
                RIGHT PANEL
            ====================================================== */}

            <div className="relative flex items-center bg-white px-6 py-7 sm:px-10 lg:px-12">

              {/* New here */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.45,
                  delay: 0.2,
                }}
                className="absolute right-7 top-5 hidden items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2 shadow-[0_8px_25px_rgba(37,99,235,0.12)] sm:flex"
              >
                <ShoppingCart
                  size={19}
                  className="text-blue-600"
                />

                <div>
                  <p className="text-[9px] text-slate-400">
                    New here?
                  </p>

                  <p className="text-[10px] font-bold text-slate-700">
                    Let's get started!
                  </p>
                </div>
              </motion.div>

              <div className="mx-auto w-full max-w-[600px]">

                {/* =================================================
                    HEADER
                ================================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                  className="mb-5 text-center"
                >
                  <motion.div
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="mx-auto mb-2.5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/20"
                  >
                    <UserPlus size={21} />
                  </motion.div>

                  <h1 className="text-[28px] font-black tracking-tight text-slate-900">
                    Create your account
                  </h1>

                  <p className="mt-1 text-xs text-slate-500">
                    Join PulseCart and start shopping smarter.
                  </p>
                </motion.div>

                {/* Error */}

                {error && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="mb-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700"
                    role="alert"
                  >
                    {error}
                  </motion.div>
                )}

                {/* Success */}

                {success && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="mb-3 rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-xs text-green-700"
                    role="status"
                  >
                    {success}
                  </motion.div>
                )}

                {/* =================================================
                    FORM
                ================================================== */}

                <motion.form
                  onSubmit={handleSubmit}
                  noValidate
                  variants={formContainer}
                  initial="hidden"
                  animate="visible"
                  className="space-y-3.5"
                >

                  {/* First + Last */}

                  <motion.div
                    variants={formItem}
                    className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
                  >

                    {/* First Name */}

                    <div>
                      <label
                        htmlFor="firstName"
                        className="mb-1.5 block text-[11px] font-bold text-slate-800"
                      >
                        First Name
                      </label>

                      <div className="relative">
                        <User
                          size={16}
                          strokeWidth={2}
                          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                        />

                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          placeholder="Enter your first name"
                          value={form.firstName}
                          onChange={handleChange}
                          required
                          disabled={loading}
                          className="h-[46px] w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-xs text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                        />
                      </div>
                    </div>

                    {/* Last Name */}

                    <div>
                      <label
                        htmlFor="lastName"
                        className="mb-1.5 block text-[11px] font-bold text-slate-800"
                      >
                        Last Name
                      </label>

                      <div className="relative">
                        <User
                          size={16}
                          strokeWidth={2}
                          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                        />

                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder="Enter your last name"
                          value={form.lastName}
                          onChange={handleChange}
                          required
                          disabled={loading}
                          className="h-[46px] w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-xs text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* =================================================
                      EMAIL
                  ================================================== */}

                  <motion.div variants={formItem}>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-[11px] font-bold text-slate-800"
                    >
                      Email
                    </label>

                    <div className="relative">
                      <Mail
                        size={17}
                        strokeWidth={2}
                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-600"
                      />

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="h-[46px] w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-xs text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                      />
                    </div>
                  </motion.div>

                  {/* =================================================
                      PHONE
                  ================================================== */}

                  <motion.div variants={formItem}>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-[11px] font-bold text-slate-800"
                    >
                      Phone Number
                    </label>

                    <div className="relative">
                      <Phone
                        size={17}
                        strokeWidth={2}
                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-600"
                      />

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="h-[46px] w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-xs text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                      />
                    </div>
                  </motion.div>

                  {/* =================================================
                      PASSWORDS
                  ================================================== */}

                  <motion.div
                    variants={formItem}
                    className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
                  >

                    {/* Password */}

                    <div>
                      <label
                        htmlFor="password"
                        className="mb-1.5 block text-[11px] font-bold text-slate-800"
                      >
                        Password
                      </label>

                      <div className="relative">
                        <Lock
                          size={16}
                          strokeWidth={2}
                          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-600"
                        />

                        <input
                          id="password"
                          name="password"
                          type={
                            showPassword
                              ? 'text'
                              : 'password'
                          }
                          placeholder="At least 8 characters"
                          value={form.password}
                          onChange={handleChange}
                          required
                          disabled={loading}
                          className="h-[46px] w-full rounded-xl border border-slate-200 bg-white pl-10 pr-10 text-xs text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setShowPassword(
                              (previous) => !previous,
                            )
                          }
                          disabled={loading}
                          aria-label={
                            showPassword
                              ? 'Hide password'
                              : 'Show password'
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-blue-600"
                        >
                          {showPassword ? (
                            <EyeOff size={16} />
                          ) : (
                            <Eye size={16} />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password */}

                    <div>
                      <label
                        htmlFor="confirmPassword"
                        className="mb-1.5 block text-[11px] font-bold text-slate-800"
                      >
                        Confirm Password
                      </label>

                      <div className="relative">
                        <Lock
                          size={16}
                          strokeWidth={2}
                          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-600"
                        />

                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={
                            showConfirmPassword
                              ? 'text'
                              : 'password'
                          }
                          placeholder="Re-enter your password"
                          value={form.confirmPassword}
                          onChange={handleChange}
                          required
                          disabled={loading}
                          className="h-[46px] w-full rounded-xl border border-slate-200 bg-white pl-10 pr-10 text-xs text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(
                              (previous) => !previous,
                            )
                          }
                          disabled={loading}
                          aria-label={
                            showConfirmPassword
                              ? 'Hide confirm password'
                              : 'Show confirm password'
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-blue-600"
                        >
                          {showConfirmPassword ? (
                            <EyeOff size={16} />
                          ) : (
                            <Eye size={16} />
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.div>

                  {/* =================================================
                      BUTTON
                  ================================================== */}

                  <motion.div
                    variants={formItem}
                    className="pt-0.5"
                  >
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{
                        y: -2,
                        scale: 1.005,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className="relative h-[48px] w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 text-xs font-bold text-white shadow-[0_9px_22px_rgba(37,99,235,0.25)] transition disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {!loading && (
                        <motion.span
                          className="absolute inset-y-0 left-[-70px] w-14 skew-x-[-20deg] bg-white/20"
                          animate={{
                            left: ['-70px', '110%'],
                          }}
                          transition={{
                            duration: 2.7,
                            repeat: Infinity,
                            repeatDelay: 1.5,
                            ease: 'easeInOut',
                          }}
                        />
                      )}

                      <span className="relative flex items-center justify-center gap-2">
                        {loading
                          ? 'Creating account...'
                          : 'Create Account'}

                        {!loading && (
                          <motion.span
                            animate={{
                              x: [0, 4, 0],
                            }}
                            transition={{
                              duration: 1.7,
                              repeat: Infinity,
                            }}
                          >
                            <ArrowRight size={16} />
                          </motion.span>
                        )}
                      </span>
                    </motion.button>
                  </motion.div>
                </motion.form>

                {/* =================================================
                    LOGIN
                ================================================== */}

                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.75,
                  }}
                  className="mt-4 text-center text-xs text-slate-500"
                >
                  Already have an account?{' '}

                  <Link
                    to="/login"
                    className="font-bold text-blue-600 transition hover:text-indigo-600 hover:underline"
                  >
                    Login
                  </Link>
                </motion.p>

                {/* =================================================
                    TRUST FEATURES
                ================================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: 0.85,
                  }}
                  className="mt-4 grid grid-cols-3 border-t border-slate-100 pt-4"
                >

                  <div className="flex flex-col items-center gap-1 border-r border-slate-100">
                    <ShieldCheck
                      size={17}
                      strokeWidth={1.8}
                      className="text-slate-700"
                    />

                    <span className="text-[9px] font-medium text-slate-500">
                      100% Secure
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-1 border-r border-slate-100">
                    <RotateCcw
                      size={17}
                      strokeWidth={1.8}
                      className="text-slate-700"
                    />

                    <span className="text-[9px] font-medium text-slate-500">
                      Easy Returns
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <Headphones
                      size={17}
                      strokeWidth={1.8}
                      className="text-slate-700"
                    />

                    <span className="text-[9px] font-medium text-slate-500">
                      24/7 Support
                    </span>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}

export default Register