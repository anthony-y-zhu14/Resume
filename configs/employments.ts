export interface Employment {
  role: string
  org: string
  dates: {
    start: string
    end: string
  }
  details: Array<string>
}

export default [
  {
    role: "Software Engineer",
    org: "Ciena",
    dates: { start: "May 2021", end: "Present" },
    details: [
      "Worked on large-scale frontend codebases spanning multiple applications and packages, delivering features and fixes within complex, long-lived systems.",
      "Led a scaffolding and standardization effort to unify previously isolated projects under shared linting, bundler, browser target, and development configurations.",
      "Built internal web-based tools to improve visibility into repository structure, dependencies, and ownership across the frontend ecosystem.",
      "Developed DX-focused CLI tooling to automate pull request workflows, status checks, and deployment-related tasks, reducing friction in day-to-day development.",
      "Contributed to a cross-team design system initiative using Web Components to enable UI reuse across React, Ember, and other frameworks."
    ],
  },
  {
    role: "Geotechnical Engineering Technician, Field and Laboratory",
    org: "WSP Canada Inc.",
    dates: { start: "April 2018", end: "December 2018" },
    details: [
      "Supported geotechnical investigations through field sampling, site inspections, laboratory testing, and preparation of technical records and reports."
    ],
  },
  {
    role: "Geotechnical Engineering Technician, Field and Laboratory",
    org: "Aecon Group Inc.",
    dates: { start: "July 2016", end: "April 2018" },
    details: [
      "Performed quality control and materials testing for construction projects, assisted engineers with field inspections, and maintained documentation to support compliance and safety requirements."
    ],
  }
] satisfies Employment[]
