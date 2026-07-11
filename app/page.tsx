'use client'

import { Button } from '@/components/ui/button'
import { Zap } from 'lucide-react'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 px-6 text-center">
      <h1 className="text-6xl font-bold tracking-tight">Spark</h1>

      <p className="text-3xl font-semibold">
        Passion isn&apos;t a lightning bolt. It&apos;s a pattern.
      </p>

      <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
        Notice what consistently gives you energy through guided reflection and
        AI-powered pattern recognition.
      </p>

      <div className="space-y-2">
        <Button>
          <Zap /> Revel my spark
        </Button>

        <p className="text-muted-foreground text-xs">
          ≈ 5 minutes • No sign-up required
        </p>
      </div>
    </main>
  )
}
