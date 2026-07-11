'use client'

import { Fragment } from 'react'
import { cn } from '@/lib/utils'
import type { Stage } from '@/types/stages'
import { Button } from './ui/button'

interface ProgressNavigationProps {
  stages: Stage[]
  currentStage: number
  onStageChange: (stage: number) => void
}

export default function ProgressNavigation({
  stages,
  currentStage,
  onStageChange,
}: ProgressNavigationProps) {
  return (
    <div className="mx-auto flex w-full items-center">
      {stages.map((stage, index) => {
        const Icon = stage.icon
        const isFuture = index > currentStage
        const isCompleted = index < currentStage
        const isCurrent = index === currentStage

        return (
          <Fragment key={stage.id}>
            <div className="flex flex-1 flex-col items-center gap-2">
              <Button
                size="icon"
                variant={isCompleted || isCurrent ? 'default' : 'outline'}
                disabled={isFuture}
                onClick={() => onStageChange(index)}
                className={cn(
                  'rounded-full transition-all',
                  isCurrent &&
                    'ring-primary ring-offset-background ring-2 ring-offset-2'
                )}
              >
                <Icon />
              </Button>

              <span
                className={cn(
                  'text-xs whitespace-nowrap',
                  isCurrent
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground'
                )}
              >
                {stage.label}
              </span>
            </div>

            {index < stages.length - 1 && (
              <div className="mb-4 flex flex-1 items-center">
                <div
                  className={cn(
                    'h-1 w-full rounded-full transition-colors',
                    isCompleted ? 'bg-primary' : 'bg-muted'
                  )}
                />
              </div>
            )}
          </Fragment>
        )
      })}
    </div>
  )
}
