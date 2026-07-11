import { Question } from '@/types/questions'

export const timeQuestions: Question[] = [
  {
    name: 'time.recentActivities',
    title: 'Recent activities',
    description:
      'What activities have you naturally spent the most time doing over the last few months?',
  },
  {
    name: 'time.freeDay',
    title: 'A completely free day',
    description:
      'If tomorrow were completely free with no obligations, how would you most likely spend your day?',
  },
  {
    name: 'time.returnTo',
    title: 'What you keep returning to',
    description:
      'Which activities do you voluntarily return to, even when nobody expects you to?',
  },
]

export const energyQuestions: Question[] = [
  {
    name: 'energy.energized',
    title: 'Energy',
    description:
      'Think about the last few weeks. Which activities consistently left you feeling energized or excited afterward?',
  },
  {
    name: 'energy.drained',
    title: 'Drain',
    description:
      'Which activities consistently leave you mentally or emotionally drained?',
  },
  {
    name: 'energy.flow',
    title: 'Flow',
    description:
      'Describe a recent moment where you became so absorbed in what you were doing that you lost track of time.',
  },
]

export const curiosityQuestions: Question[] = [
  {
    name: 'curiosity.rabbitHoles',
    title: 'Rabbit holes',
    description:
      'What topics or ideas do you repeatedly find yourself reading, watching, or learning about?',
  },
  {
    name: 'curiosity.favoriteProblems',
    title: 'Interesting problems',
    description:
      'What kinds of problems do you genuinely enjoy thinking about or solving?',
  },
  {
    name: 'curiosity.endlessConversation',
    title: 'Conversations',
    description:
      'What topic could you happily discuss for hours without getting bored?',
  },
]

export const purposeQuestions: Question[] = [
  {
    name: 'purpose.moneyNoObject',
    title: `If money weren't a concern`,
    description:
      'If money were completely taken care of, what kind of work or projects would you still choose to spend your time on?',
  },
  {
    name: 'purpose.helpingOthers',
    title: 'Helping others',
    description:
      'What do people naturally come to you for help, advice, or guidance about?',
  },
  {
    name: 'purpose.desiredImpact',
    title: 'Impact',
    description:
      'When you imagine your best work, what kind of impact would you like it to have on other people?',
  },
]
