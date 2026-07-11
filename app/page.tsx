'use client'

import { MotionButton } from '@/components/motion'
import { Zap } from 'lucide-react'
import { motion } from 'motion/react'

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <motion.div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div className="from-primary/20 absolute -top-200 left-1/2 h-[100rem] w-[100rem] -translate-x-1/2 rounded-full bg-radial to-transparent blur-3xl" />
      </motion.div>

      <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-8 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-2xl"
        >
          <Zap className="text-primary size-8" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-5xl font-bold tracking-tight md:text-7xl"
        >
          Spark
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="text-2xl font-semibold md:text-4xl"
        >
          Passion isn&apos;t a lightning bolt. It&apos;s a pattern.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="text-muted-foreground max-w-xl text-lg leading-relaxed"
        >
          We spend years asking what we&apos;re passionate about. The answer is
          often already hidden in the moments that make us feel most alive.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="text-muted-foreground max-w-xl leading-relaxed"
        >
          Spark helps you uncover those patterns through guided reflection and
          AI-powered analysis.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-2"
        >
          <MotionButton size="lg">
            <Zap />
            Reveal My Spark
          </MotionButton>

          <p className="text-muted-foreground text-xs">
            ≈ 5 minutes • No sign-up required
          </p>
        </motion.div>
      </div>
    </main>
  )
}
