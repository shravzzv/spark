# ⚡ Spark

> **Passion isn't a lightning bolt. It's a pattern.**

Spark is an AI-powered reflection experience that helps people discover recurring patterns in what naturally gives them energy, curiosity, and meaning.

Rather than asking _"What's your passion?"_, Spark asks a better question:

> **What do your choices repeatedly reveal about you?**

Through a short guided interview and structured reasoning powered by Gemini, Spark generates an evidence-based report describing the user's strongest motivational patterns, supporting evidence, possible blind spots, and practical experiments to validate its conclusions.

---

# Why Spark?

Many passion quizzes feel arbitrary.

They often:

- ask superficial multiple-choice questions,
- produce flattering personality labels,
- provide little evidence,
- and present conclusions as certainty.

Spark takes a different approach.

It treats passion as an observable pattern rather than a hidden trait.

Instead of attempting to "detect" a person's calling, Spark analyzes recurring themes across their own reflections.

Every conclusion is grounded in the user's responses and presented as a hypothesis rather than absolute truth.

---

# Philosophy

Spark is built on four principles.

### Evidence over intuition

Every conclusion should be supported by multiple pieces of evidence from the interview.

### Patterns over moments

One exciting experience doesn't define someone's passion.

Spark looks for repeated signals across multiple domains.

### Humility over certainty

The report is intentionally probabilistic.

It acknowledges uncertainty, considers alternative explanations, and encourages experimentation instead of claiming to know the user's future.

### Reflection over prediction

The goal isn't to predict who someone is.

The goal is to help them notice patterns they may have overlooked.

---

# The Experience

## 1. Landing Page

Users begin with a minimal landing page introducing Spark and its core philosophy.

---

## 2. Guided Interview

Instead of presenting a long scrolling questionnaire, Spark walks users through four reflection stages.

### ⏰ Time

Where do you naturally spend your time?

### ⚡ Energy

What consistently energizes—or drains—you?

### 🧠 Curiosity

What problems, ideas, or topics repeatedly pull your attention?

### 🤝 Purpose

What kind of contribution feels meaningful to you?

Each stage contains carefully written open-ended questions designed to encourage reflection rather than one-word answers.

---

## 3. AI Analysis

Once the interview is complete:

- the questionnaire is reconstructed into a readable interview transcript,
- Gemini analyzes recurring themes,
- structured JSON is returned,
- the response is validated,
- and a personalized report is generated.

The analysis intentionally focuses on:

- recurring patterns,
- supporting evidence,
- alternative explanations,
- uncertainty,
- practical next experiments.

---

## 4. Spark Report

The report includes:

- Spark title
- Confidence score
- Executive summary
- Spark DNA
- Supporting evidence
- Counter-evidence
- Blind spots
- Suggested experiments
- Final conclusion

The report aims to feel like a thoughtful coach rather than a personality test.

---

# Use of Gemini

Gemini is not used simply to summarize text.

Instead, it performs structured reasoning over an interview.

Spark asks Gemini to:

- identify recurring patterns across multiple answers,
- weigh evidence,
- resolve contradictions,
- consider competing explanations,
- estimate confidence,
- generate practical experiments,
- return structured JSON,
- follow a strict response schema.

The application then validates Gemini's output before rendering the report.

This makes Gemini responsible for the reasoning process rather than simple text generation.

---

# Technical Highlights

- Next.js App Router
- TypeScript
- React
- React Hook Form
- Zod validation
- Motion
- shadcn/ui
- Gemini API
- Responsive design
- Progressive Web App (PWA)

---

# Architecture

```
Landing Page
      │
      ▼
Multi-stage Interview
      │
      ▼
React Hook Form
      │
      ▼
Interview Builder
      │
      ▼
Gemini
      │
Structured JSON
      │
      ▼
Zod Validation
      │
      ▼
Spark Report
```

---

# Structured AI Output

Gemini returns structured JSON instead of free-form text.

This allows Spark to:

- validate responses,
- render rich UI components,
- visualize scores,
- safely evolve the report,
- avoid brittle text parsing.

---

# Design Goals

Spark aims to feel:

- calm
- thoughtful
- modern
- trustworthy
- minimal
- evidence-driven

Animations are intentionally subtle and support the experience rather than distract from it.

---

# Future Ideas

Although this project is intentionally small, Spark has many possible directions.

### Richer reports

- interactive insights
- relationship graphs
- recurring themes
- timeline visualizations

### Personalized recommendations

- books
- courses
- careers
- projects
- communities

### Longitudinal reflection

Generate reports every month and compare how motivations evolve over time.

### AI conversations

Allow users to ask follow-up questions about their report.

### Visual generation

Generate symbolic artwork representing the user's Spark using multimodal AI.

---

# Running Locally

```bash
git clone <repository>

cd spark

npm install

npm run dev
```

Create a `.env.local` file:

```env
GEMINI_API_KEY=your_api_key_here
```

Start the development server:

```bash
npm run dev
```

---

# A Note

Spark doesn't try to tell people who they are.

Instead, it helps them observe what they consistently choose.

Because sometimes passion isn't something waiting to be discovered.

It's something that's already visible in the patterns of everyday life.
