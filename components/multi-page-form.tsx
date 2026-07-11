'use client'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from './ui/button'
import { ArrowRight, X, Zap } from 'lucide-react'

export default function MultiPageForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg">
          <Zap />
          Reveal My Spark
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Find your spark</DialogTitle>
          <DialogDescription>
            This isn&apos;t a personality test. There are no right answers.
            Simply answer honestly based on your recent experiences. This takes
            about 5 minutes.
          </DialogDescription>
        </DialogHeader>

        <section>
          <h2 className="text-2xl font-bold">Time</h2>
        </section>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">
              <X /> Close
            </Button>
          </DialogClose>

          <Button>
            <ArrowRight />
            Next
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
