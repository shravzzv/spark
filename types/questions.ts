export type QuestionName =
  | 'time.recentActivities'
  | 'time.freeDay'
  | 'time.returnTo'
  | 'energy.energized'
  | 'energy.drained'
  | 'energy.flow'
  | 'curiosity.rabbitHoles'
  | 'curiosity.favoriteProblems'
  | 'curiosity.endlessConversation'
  | 'purpose.moneyNoObject'
  | 'purpose.helpingOthers'
  | 'purpose.desiredImpact'

export interface Question {
  name: QuestionName
  title: string
  description: string
}
