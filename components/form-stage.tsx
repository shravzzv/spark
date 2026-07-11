'use client'

import { Controller, useFormContext } from 'react-hook-form'
import { SparkForm } from '@/schemas/spark'
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
    <Card className="mx-auto max-w-2xl">
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
              render={({ field, fieldState }) => (
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
