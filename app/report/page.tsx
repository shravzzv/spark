'use client'

import { MotionCard } from '@/components/motion'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Zap } from 'lucide-react'
import { motion } from 'motion/react'
import { Progress } from '@/components/ui/progress'

const report = {
  sparkTitle: 'Entrepreneurial Creator',

  sparkSummary:
    'You consistently come alive when building systems, solving meaningful problems, and creating things that compound over time. Across your answers, the strongest pattern was a desire for autonomy, mastery, and impact.',

  patterns: [
    'Building systems and tools',
    'Solving difficult problems',
    'Learning rapidly',
    'Working independently',
  ],

  energySources: [
    { title: 'Building', scoreValue: 70 },
    { title: 'Learning', scoreValue: 90 },
    { title: 'Designing', scoreValue: 60 },
    { title: 'Writing', scoreValue: 80 },
  ],

  evidence: [
    'Mentioned creating things across multiple answers',
    'Described losing track of time while building',
    'Repeatedly returned to self-directed projects',
    'Chose growth-oriented activities over passive entertainment',
    'Expressed strong curiosity about technology and entrepreneurship',
    'Wanted to build systems that are robust',
  ],

  blindSpots: [
    'Can spend too much time optimizing systems instead of shipping',
    'May underestimate the importance of recovery and rest',
    'Sometimes pursues too many interesting ideas simultaneously',
  ],

  experiments: [
    'Build one tiny project in a single weekend',
    'Keep a daily log of moments that generated energy',
    'Teach a concept you recently learned',
    'Spend one afternoon following pure curiosity',
  ],

  quote:
    'Your passion is not hidden. It is already visible in the things you repeatedly choose when nobody is watching.',
}

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="from-primary/20 absolute -top-200 left-1/2 h-[100rem] w-[100rem] -translate-x-1/2 rounded-full bg-radial to-transparent blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-5xl flex-col gap-8 px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <div className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-2xl">
            <Zap className="text-primary size-8" />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Your Spark
            </h1>

            <div className="bg-primary/10 text-primary inline-flex rounded-full px-3 py-1 text-sm font-medium">
              {report.sparkTitle}
            </div>
          </div>

          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            {report.sparkSummary}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <MotionCard
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <CardHeader>
              <CardTitle>Recurring Patterns</CardTitle>
            </CardHeader>

            <CardContent>
              <ul className="space-y-2">
                {report.patterns.map((pattern) => (
                  <li
                    key={pattern}
                    className="bg-primary/5 rounded-lg px-3 py-2"
                  >
                    {pattern}
                  </li>
                ))}
              </ul>
            </CardContent>
          </MotionCard>

          <MotionCard
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <CardHeader>
              <CardTitle>Energy Sources</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              {report.energySources.map((source) => (
                <div key={source.title} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>{source.title}</span>
                    <span className="text-muted-foreground">
                      {source.scoreValue > 70
                        ? 'high'
                        : source.scoreValue > 50
                          ? 'medium'
                          : 'low'}
                    </span>
                  </div>

                  <Progress value={source.scoreValue} />
                </div>
              ))}
            </CardContent>
          </MotionCard>
        </div>

        <MotionCard
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <CardHeader>
            <CardTitle>Why Spark Thinks This?</CardTitle>
          </CardHeader>

          <CardContent className="grid gap-3 md:grid-cols-2">
            {report.evidence.map((item) => (
              <div
                key={item}
                className="bg-primary/5 flex items-center gap-2 rounded-lg px-4 py-3"
              >
                <Check className="size-6 shrink-0" /> <span>{item}</span>
              </div>
            ))}
          </CardContent>
        </MotionCard>

        <div className="grid gap-6 md:grid-cols-2">
          <MotionCard
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <CardHeader>
              <CardTitle>Blind Spots</CardTitle>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3">
                {report.blindSpots.map((item) => (
                  <li key={item} className="bg-muted rounded-lg px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </MotionCard>

          <MotionCard
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <CardHeader>
              <CardTitle>Suggested Experiments</CardTitle>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3">
                {report.experiments.map((item) => (
                  <li key={item} className="bg-primary/5 rounded-lg px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </MotionCard>
        </div>

        <MotionCard
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="bg-primary/5 px-8 py-10 text-center"
        >
          <blockquote className="mx-auto max-w-3xl text-xl leading-relaxed font-medium italic">
            “{report.quote}”
          </blockquote>
        </MotionCard>
      </div>
    </main>
  )
}
