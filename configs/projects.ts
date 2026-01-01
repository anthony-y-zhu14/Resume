export interface Project {
  name: string
  dates: {
    start: string
    end: string
  }
  location: string
  details: Array<string>
  technologies: Array<string>
  skills: Array<string>
  link?: {
    href: string
    label: string
  }
}

export default [
  {
    name: "MikoshiUI",
    dates: { start: "August 2022", end: "Present" },
    location: "Ottawa, Ontario",
    details: [
      "Created a React-based UI framework featuring Google's Material Design system and glassmorphism styling.",
    ],
    link: { label: "github.com/anthony-y-zhu14/MikoshiUI", href: "https://github.com/anthony-y-zhu14/MikoshiUI" },
    technologies: ["React", "Vite", "HTML", "SASS", "TypeScript", "Git"],
    skills: ["Project Planning", "Database Design", "Front End Web Design"],
  },
  {
    name: "QuickIn - Quick QR code Check in App",
    dates: { start: "Jan 2021", end: "May 2021" },
    location: "Ottawa, Ontario",
    details: [
      "Created a QR code check-in web app that enables businesses to record customer traffic data by scanning a QR code associated with a customer account.",
    ],
    link: { label: "github.com/anthony-y-zhu14/QuickIn", href: "https://github.com/anthony-y-zhu14/QuickIn" },
    technologies: ["React", "Node.js", "MongoDB", "HTML", "CSS", "JavaScript", "Git"],
    skills: ["Project Planning", "Database Design", "Front End Web Design"],
  }
] as Array<Project>
