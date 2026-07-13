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
import FormStage from './form-stage'
import { stages } from '@/constants/stages'
import { formSchema } from '@/schemas/spark'
import { generateReport } from '@/app/actions'
import { useRouter } from 'next/navigation'
import { Spinner } from './ui/spinner'
import type { SparkForm } from '@/types/form'
import { SPARK_REPORT_STORAGE_KEY } from '@/constants/storage-keys'
import { toast } from 'sonner'

export default function MultiPageForm() {
  const [currentStage, setCurrentStage] = useState(0)
  const [furthestStage, setFurthestStage] = useState(0)
  const [isGenerating, setIsGenerating] = useState(false)
  const router = useRouter()

  const stage = stages[currentStage]

  const form = useForm<SparkForm>({
    resolver: zodResolver(formSchema),
    mode: 'onSubmit',
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

  const goToNextStage = async () => {
    const valid = await form.trigger(
      stage.questions.map((question) => question.name)
    )
    if (!valid) return

    const nextStage = Math.min(currentStage + 1, stages.length - 1)
    setCurrentStage(nextStage)
    setFurthestStage((prev) => Math.max(prev, nextStage))
  }

  const goToPreviousStage = () => {
    setCurrentStage((prev) => Math.max(prev - 1, 0))
  }

  const onSubmit = async (data: SparkForm) => {
    setIsGenerating(true)

    try {
      const report = await generateReport(data)
      localStorage.setItem(SPARK_REPORT_STORAGE_KEY, JSON.stringify(report))
      router.push('/report')
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : 'Something went wrong while generating your Spark report.'
      )
    } finally {
      setIsGenerating(false)
    }
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
            furthestStage={furthestStage}
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
              <Button
                disabled={isGenerating}
                onClick={form.handleSubmit(onSubmit)}
              >
                {isGenerating ? <Spinner /> : <Zap />}
                {isGenerating ? 'Analyzing…' : 'Reveal My Spark'}
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
