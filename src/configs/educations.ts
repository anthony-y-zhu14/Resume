export interface Education {
  credential: string
  institution: string
  dates: {
    start: string
    end: string
  }
}

export default [
  {
    credential: "Bachelor of Science - Computer Science",
    institution: "Carleton University",
    dates: { start: "Sep 2019", end: "June 2024" },
  },
  {
    credential: "Advance College Diploma - Civil Engineering",
    institution: "Algonquin College",
    dates: { start: "Sep 2014", end: "June 2018" },
  }
] as Array<Education>