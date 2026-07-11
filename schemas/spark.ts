import * as z from 'zod'

export const MIN_ANSWER_LENGTH = 30
export const MAX_ANSWER_LENGTH = 1000

const answer = z
  .string()
  .trim()
  .min(
    MIN_ANSWER_LENGTH,
    `Please write at least ${MIN_ANSWER_LENGTH} characters.`
  )
  .max(
    MAX_ANSWER_LENGTH,
    `Please keep your answer under ${MAX_ANSWER_LENGTH} characters.`
  )

export const formSchema = z.object({
  time: z.object({
    recentActivities: answer,
    freeDay: answer,
    returnTo: answer,
  }),

  energy: z.object({
    energized: answer,
    drained: answer,
    flow: answer,
  }),

  curiosity: z.object({
    rabbitHoles: answer,
    favoriteProblems: answer,
    endlessConversation: answer,
  }),

  purpose: z.object({
    moneyNoObject: answer,
    helpingOthers: answer,
    desiredImpact: answer,
  }),
})

export type SparkForm = z.infer<typeof formSchema>
