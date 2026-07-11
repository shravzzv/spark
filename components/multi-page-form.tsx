'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, X, Zap } from 'lucide-react'
import ProgressNavigation from './progress-navigation'
import { Button } from './ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { stages } from '@/constants/stages'

export default function MultiPageForm() {
  const [currentStage, setCurrentStage] = useState(0)

  const goToNextStage = () => {
    setCurrentStage((prev) => Math.min(prev + 1, stages.length - 1))
  }

  const goToPreviousStage = () => {
    setCurrentStage((prev) => Math.max(prev - 1, 0))
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg">
          <Zap />
          Reveal My Spark
        </Button>
      </DialogTrigger>

      <DialogContent className="flex h-dvh w-screen max-w-none flex-col rounded-none p-6 sm:h-[90dvh] sm:w-[90vw] sm:max-w-6xl sm:rounded-2xl sm:p-8">
        <DialogHeader>
          <DialogTitle>Find your spark</DialogTitle>
          <DialogDescription>
            This isn&apos;t a personality test. There are no right answers.
            Simply answer honestly based on your recent experiences. This takes
            about 5 minutes.
          </DialogDescription>
        </DialogHeader>

        <ProgressNavigation
          stages={stages}
          currentStage={currentStage}
          onStageChange={setCurrentStage}
        />

        <section className="flex-1 overflow-y-auto rounded-2xl border p-6">
          <h2 className="text-xl font-bold md:text-2xl">
            {stages[currentStage].label}
          </h2>
        </section>

        <DialogFooter className="">
          {currentStage === 0 && (
            <DialogClose asChild>
              <Button variant="outline">
                <X />
                Close
              </Button>
            </DialogClose>
          )}

          {currentStage > 0 && (
            <Button variant="outline" onClick={goToPreviousStage}>
              <ArrowLeft />
              Back
            </Button>
          )}

          <Button onClick={goToNextStage}>
            {currentStage === stages.length - 1 ? <Zap /> : <ArrowRight />}
            {currentStage === stages.length - 1 ? 'Reveal My Spark' : 'Next'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
