'use client'

import { MotionCard } from '@/components/motion'
import { Progress } from '@/components/ui/progress'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ArrowRight,
  Check,
  CircleAlert,
  Compass,
  Dna,
  Lightbulb,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react'
import { motion } from 'motion/react'
import { Lora } from 'next/font/google'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { SparkReport } from '@/types/report'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { SPARK_REPORT_STORAGE_KEY } from '@/constants/storage-keys'

const lora = Lora({
  subsets: ['latin'],
})

export default function Page() {
  const [report, setReport] = useState<SparkReport | null>(null)
  const router = useRouter()

  useEffect(() => {
    const hydrate = () => {
      const json = localStorage.getItem(SPARK_REPORT_STORAGE_KEY)

      if (!json) {
        router.replace('/')
        return
      }

      setReport(JSON.parse(json))
    }

    hydrate()
  }, [router])

  if (!report) {
    return null
  }

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="from-primary/20 absolute -top-200 left-1/2 h-[100rem] w-[100rem] -translate-x-1/2 rounded-full bg-radial to-transparent blur-3xl" />

        <div className="from-primary/10 absolute top-220 -left-72 h-180 w-180 rounded-full bg-radial to-transparent blur-3xl" />

        <div className="from-primary/10 absolute -right-48 -bottom-48 h-160 w-160 rounded-full bg-radial to-transparent blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-16">
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 text-center"
        >
          <div className="bg-primary/10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl">
            <Zap className="text-primary size-8" />
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight">Your Spark</h1>

            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium">
                {report.sparkTitle}
              </div>

              <div className="bg-card rounded-full border px-4 py-1 text-sm">
                {report.confidence}% confidence
              </div>
            </div>
          </div>

          <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed">
            {report.summary}
          </p>
        </motion.section>

        <MotionCard
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Dna className="text-primary size-5" />
              <CardTitle>Spark DNA</CardTitle>
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            {report.dna.map((trait) => (
              <div key={trait.title} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{trait.title}</span>

                  <span className="text-muted-foreground text-sm">
                    {trait.score}
                  </span>
                </div>

                <Progress value={trait.score} />

                <p className="text-muted-foreground text-sm">
                  {trait.description}
                </p>
              </div>
            ))}
          </CardContent>
        </MotionCard>

        <MotionCard className="bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="text-primary size-5" />
              Why Spark Thinks This
            </CardTitle>
          </CardHeader>

          <CardContent className="grid gap-4 md:grid-cols-2">
            {report.evidence.map((item) => (
              <div
                key={item.title}
                className="bg-background rounded-xl border p-5"
              >
                <div className="mb-3 flex items-start gap-3">
                  <Check className="text-primary mt-0.5 size-5 shrink-0" />

                  <h3 className="font-semibold">{item.title}</h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.why}
                </p>
              </div>
            ))}
          </CardContent>
        </MotionCard>

        <MotionCard>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Compass className="size-5" />
              Almost Your Spark
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">
            <h3 className="text-lg font-semibold">
              {report.counterEvidence.title}
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              {report.counterEvidence.explanation}
            </p>
          </CardContent>
        </MotionCard>

        <div className="grid gap-6 md:grid-cols-2">
          <MotionCard>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CircleAlert className="size-5" />
                Possible Blind Spots
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
              {report.blindSpots.map((item) => (
                <div key={item} className="bg-muted rounded-lg p-3">
                  {item}
                </div>
              ))}
            </CardContent>
          </MotionCard>

          <MotionCard className="bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="size-5" />
                Experiments
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              {report.experiments.map((item) => (
                <div
                  key={item.title}
                  className="bg-background rounded-xl border p-4"
                >
                  <h3 className="mb-1 font-semibold">{item.title}</h3>

                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </CardContent>
          </MotionCard>
        </div>

        <MotionCard className="bg-primary/5 border-primary/20 px-10 py-12 text-center">
          <Target className="text-primary mx-auto mb-6 size-8" />

          <blockquote
            className={`${lora.className} mx-auto max-w-3xl text-2xl leading-relaxed italic`}
          >
            &quot;{report.conclusion}&quot;
          </blockquote>

          <div className="bg-primary/20 mx-auto my-8 h-px w-32 rounded-full" />
          <p className="text-muted-foreground text-sm">
            Spark isn&apos;t trying to tell you who you are. It&apos;s showing
            you the patterns you&apos;ve already been living.
          </p>
        </MotionCard>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >
          <Link href="/">
            <Button size="lg">
              Reflect Again
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
