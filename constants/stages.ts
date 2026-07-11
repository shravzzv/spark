import { Brain, Clock12, HandCoins, Zap } from 'lucide-react'

import {
  curiosityQuestions,
  energyQuestions,
  purposeQuestions,
  timeQuestions,
} from './questions'

export const stages = [
  {
    id: 'time',
    label: 'Time',
    icon: Clock12,
    title: 'Moments',
    description:
      "Think about the last few months. We're looking for recurring patterns, not perfect answers.",
    questions: timeQuestions,
  },
  {
    id: 'energy',
    label: 'Energy',
    icon: Zap,
    title: 'Energy',
    description: 'Think about what gives you energy and what takes it away.',
    questions: energyQuestions,
  },
  {
    id: 'curiosity',
    label: 'Curiosity',
    icon: Brain,
    title: 'Curiosity',
    description: 'Curiosity is one of the strongest signals of passion.',
    questions: curiosityQuestions,
  },
  {
    id: 'purpose',
    label: 'Purpose',
    icon: HandCoins,
    title: 'Purpose',
    description: 'Finally, think about contribution and long-term meaning.',
    questions: purposeQuestions,
  },
] as const
