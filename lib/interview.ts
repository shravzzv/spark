import { stages } from '@/constants/stages'
import type { SparkForm } from '@/types/form'

/**
 * Returns the user's answer for a nested form field.
 *
 * Example:
 *
 * "time.recentActivities"
 *        ↓
 * data.time.recentActivities
 */
function getAnswer(data: SparkForm, path: string): unknown {
  return path
    .split('.')
    .reduce<unknown>(
      (value, key) => (value as Record<string, unknown>)[key],
      data
    )
}

/**
 * Builds the interview transcript that is sent to Gemini.
 *
 * Rather than sending raw JSON, we reconstruct the questionnaire so the model
 * sees both the original questions and the user's answers.
 *
 * Example:
 *
 * # Time
 * Think about the last few months...
 *
 * Question:
 * What activities have you naturally spent the most time doing?
 *
 * Answer:
 * Building software.
 */
export function buildInterview(data: SparkForm): string {
  return stages
    .map((stage) => {
      const interviewQuestions = stage.questions
        .map((question) => {
          const answer = getAnswer(data, question.name)

          return [
            'Question:',
            question.description,
            '',
            'Answer:',
            String(answer),
          ].join('\n')
        })
        .join('\n\n')

      return [
        `# ${stage.title}`,
        stage.description,
        '',
        interviewQuestions,
      ].join('\n')
    })
    .join('\n\n')
}
