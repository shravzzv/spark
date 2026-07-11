'use server'

import { gemini } from '@/gemini/client'
import { prompt } from '@/gemini/prompt'
import { reportJsonSchema, reportSchema } from '@/schemas/report'
import type { SparkForm } from '@/types/form'

export const generateReport = async (data: SparkForm) => {
  try {
    const interaction = await gemini.interactions.create({
      model: 'gemini-2.5-flash',
      system_instruction: prompt,
      input: `${JSON.stringify(data, null, 2)}`,

      response_format: {
        type: 'text',
        mime_type: 'application/json',
        schema: reportJsonSchema,
      },
    })

    if (!interaction.output_text) {
      throw Error('No output text from the AI interaction.')
    }

    return reportSchema.parse(JSON.parse(interaction.output_text))
  } catch (error) {
    console.error('Error generating report', error)
    throw new Error('Failed to generate Spark report.')
  }
}
