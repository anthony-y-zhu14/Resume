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
    credential: "Bachelor of Science (Honours) - Computer Science",
    institution: "Carleton University",
    dates: { start: "2019", end: "2023" },
  },
  {
    credential: "Advance Diploma (Honours) - Civil Engineering",
    institution: "Algonquin College of Applied Arts and Technology",
    dates: { start: "2014", end: "2017" },
  }
] satisfies Array<Education>
