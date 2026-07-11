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
import type { Question } from '@/types/questions'
import { cn } from '@/lib/utils'
import { MIN_ANSWER_LENGTH } from '@/constants/answers'
import { SparkForm } from '@/types/form'

interface FormStageProps {
  title: string
  description: string
  questions: Question[]
}

export default function FormStage({
  title,
  description,
  questions,
}: FormStageProps) {
  const form = useFormContext<SparkForm>()

  return (
    <Card className="mx-auto max-w-xl">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <FieldGroup>
          {questions.map((question) => (
            <Controller
              key={question.name}
              name={question.name}
              control={form.control}
              render={({ field, fieldState }) => {
                const length = field.value.length

                return (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={question.name}>
                      {question.title}
                    </FieldLabel>

                    <Textarea
                      {...field}
                      id={question.name}
                      placeholder={question.description}
                      className="min-h-32"
                      aria-invalid={fieldState.invalid}
                    />

                    <div className="mt-1 flex min-h-5 items-start justify-between gap-4">
                      <div className="min-w-0">
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </div>

                      <span
                        className={cn(
                          'shrink-0 text-xs tabular-nums transition-colors',
                          length === 0 && 'text-muted-foreground',
                          length > 0 &&
                            length < MIN_ANSWER_LENGTH &&
                            'text-amber-600 dark:text-amber-400',
                          length >= MIN_ANSWER_LENGTH &&
                            'text-green-600 dark:text-green-400'
                        )}
                      >
                        {length} / {MIN_ANSWER_LENGTH}
                      </span>
                    </div>
                  </Field>
                )
              }}
            />
          ))}
        </FieldGroup>
      </CardContent>
    </Card>
  )
}
