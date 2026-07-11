'use client'

import { Controller, useFormContext } from 'react-hook-form'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Textarea } from '@/components/ui/textarea'
import type { SparkForm } from '@/schemas/spark'
import { timeQuestions } from '@/constants/questions'

export default function TimeStage() {
  const form = useFormContext<SparkForm>()

  return (
    <Card className="mx-auto max-w-2xl">
      <CardHeader>
        <CardTitle>Moments</CardTitle>

        <CardDescription>
          Think about the last few months. We&apos;re looking for recurring
          patterns, not perfect answers.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <FieldGroup>
          {timeQuestions.map((question) => (
            <Controller
              key={question.name}
              name={question.name}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={question.name}>
                    {question.title}
                  </FieldLabel>

                  <Textarea
                    /**
                   * Type '{ id: "time" | "energy" | "curiosity" | "purpose" | "time.recentActivities" | "time.freeDay" | "time.returnTo" | "energy.energized" | "energy.drained" | "energy.flow" | "curiosity.rabbitHoles" | ... 4 more ... | "purpose.desiredImpact"; ... 8 more ...; ref: RefCallBack; }' is not assignable to type 'TextareaHTMLAttributes<HTMLTextAreaElement>'.
  Types of property 'value' are incompatible.
    Type 'string | { recentActivities: string; freeDay: string; returnTo: string; } | { energized: string; drained: string; flow: string; } | { rabbitHoles: string; favoriteProblems: string; endlessConversation: string; } | { ...; }' is not assignable to type 'string | number | readonly string[] | undefined'.
      Type '{ recentActivities: string; freeDay: string; returnTo: string; }' is not assignable to type 'string | number | readonly string[] | undefined'.
                   */
                    {...field}
                    id={question.name}
                    placeholder={question.description}
                    aria-invalid={fieldState.invalid}
                    className="min-h-32"
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          ))}
        </FieldGroup>
      </CardContent>
    </Card>
  )
}
