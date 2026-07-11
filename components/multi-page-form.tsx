'use client'

import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, ArrowRight, X, Zap } from 'lucide-react'
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
import { Button } from '@/components/ui/button'
import ProgressNavigation from './progress-navigation'
import { stages } from '@/constants/stages'
import { formSchema, SparkForm } from '@/schemas/spark'
import FormStage from './form-stage'

export default function MultiPageForm() {
  const [currentStage, setCurrentStage] = useState(0)
  const stage = stages[currentStage]

  const form = useForm<SparkForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      time: {
        recentActivities: '',
        freeDay: '',
        returnTo: '',
      },
      energy: {
        energized: '',
        drained: '',
        flow: '',
      },
      curiosity: {
        rabbitHoles: '',
        favoriteProblems: '',
        endlessConversation: '',
      },
      purpose: {
        moneyNoObject: '',
        helpingOthers: '',
        desiredImpact: '',
      },
    },
  })

  async function goToNextStage() {
    const valid = await form.trigger([
      'time.recentActivities',
      'time.freeDay',
      'time.returnTo',
    ])

    if (!valid) return

    setCurrentStage((stage) => Math.min(stage + 1, stages.length - 1))
  }

  function goToPreviousStage() {
    setCurrentStage((stage) => Math.max(stage - 1, 0))
  }

  function onSubmit(data: SparkForm) {
    console.log(data)

    // TODO:
    // call Gemini
    // navigate to /report
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
          <DialogTitle>Find your Spark</DialogTitle>

          <DialogDescription>
            This isn&apos;t a personality test. There are no right answers.
            Answer honestly based on your recent experiences.
          </DialogDescription>
        </DialogHeader>

        <FormProvider {...form}>
          <ProgressNavigation
            stages={stages}
            currentStage={currentStage}
            onStageChange={setCurrentStage}
          />

          <section className="flex-1 overflow-y-auto p-2">
            <FormStage
              title={stage.title}
              description={stage.description}
              questions={stage.questions}
            />
          </section>

          <DialogFooter>
            {currentStage === 0 ? (
              <DialogClose asChild>
                <Button variant="outline">
                  <X />
                  Close
                </Button>
              </DialogClose>
            ) : (
              <Button variant="outline" onClick={goToPreviousStage}>
                <ArrowLeft />
                Back
              </Button>
            )}

            {currentStage === stages.length - 1 ? (
              <Button onClick={form.handleSubmit(onSubmit)}>
                <Zap />
                Reveal My Spark
              </Button>
            ) : (
              <Button onClick={goToNextStage}>
                <ArrowRight />
                Next
              </Button>
            )}
          </DialogFooter>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}
