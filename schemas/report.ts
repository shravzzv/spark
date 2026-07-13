import * as z from 'zod'

export const reportSchema = z.object({
  sparkTitle: z.string(),
  confidence: z.number().min(0).max(100),
  summary: z.string(),
  dna: z.array(
    z.object({
      title: z.string(),
      score: z.number().min(0).max(100),
      description: z.string(),
    })
  ),
  evidence: z.array(
    z.object({
      title: z.string(),
      why: z.string(),
    })
  ),
  counterEvidence: z.object({
    title: z.string(),
    explanation: z.string(),
  }),
  blindSpots: z.array(z.string()),
  experiments: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
    })
  ),
  conclusion: z.string(),
})

export const reportJsonSchema = {
  type: 'object',
  properties: {
    sparkTitle: {
      type: 'string',
    },

    confidence: {
      type: 'integer',
    },

    summary: {
      type: 'string',
    },

    dna: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
          },
          score: {
            type: 'integer',
          },
          description: {
            type: 'string',
          },
        },
        required: ['title', 'score', 'description'],
      },
    },

    evidence: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
          },
          why: {
            type: 'string',
          },
        },
        required: ['title', 'why'],
      },
    },

    counterEvidence: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
        },
        explanation: {
          type: 'string',
        },
      },
      required: ['title', 'explanation'],
    },

    blindSpots: {
      type: 'array',
      items: {
        type: 'string',
      },
    },

    experiments: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
          },
          description: {
            type: 'string',
          },
        },
        required: ['title', 'description'],
      },
    },

    conclusion: {
      type: 'string',
    },
  },

  required: [
    'sparkTitle',
    'confidence',
    'summary',
    'dna',
    'evidence',
    'counterEvidence',
    'blindSpots',
    'experiments',
    'conclusion',
  ],
} as const
