import { reportSchema } from '@/schemas/report'
import * as z from 'zod'

export type SparkReport = z.infer<typeof reportSchema>
