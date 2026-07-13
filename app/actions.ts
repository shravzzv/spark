'use server'

import { gemini } from '@/gemini/client'
import { prompt } from '@/gemini/prompt'
import { buildInterview } from '@/lib/interview'
import { reportJsonSchema, reportSchema } from '@/schemas/report'
import type { SparkForm } from '@/types/form'

/**
 * Generates a personalized Spark report from the user's questionnaire.
 *
 * The questionnaire is transformed into an interview transcript and sent to
 * Gemini, which returns a structured JSON report. The response is validated
 * against the report schema before being returned.
 *
 * @param data The completed Spark questionnaire.
 * @returns A validated Spark report.
 * @throws If Gemini fails to generate a report or returns invalid data.
 */
export const generateReport = async (data: SparkForm) => {
  try {
    const interaction = await gemini.interactions.create({
      model: 'gemini-3.5-flash',
      system_instruction: prompt,
      input: buildInterview(data),

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
