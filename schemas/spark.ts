import * as z from 'zod'

const answer = z
  .string()
  .trim()
  .min(30, 'Please write a little more.')
  .max(1000, 'Please keep your answer under 1000 characters.')

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
