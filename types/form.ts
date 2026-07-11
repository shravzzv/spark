import * as z from 'zod'
import { formSchema } from '@/schemas/spark'

export type SparkForm = z.infer<typeof formSchema>
