import type { Stage } from '@/types/stages'
import { Brain, Clock12, HandCoins, Zap } from 'lucide-react'

export const stages: Stage[] = [
  { id: 'time', label: 'Time', icon: Clock12 },
  { id: 'energy', label: 'Energy', icon: Zap },
  { id: 'curiosity', label: 'Curiosity', icon: Brain },
  { id: 'purpose', label: 'Purpose', icon: HandCoins },
]
