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
    role: "Software Developer, Internship",
    org: "Ciena Corporation",
    dates: { start: "May 2021", end: "August 2022" },
    details: [
      "Employed as a Frontend Software Developer, maintained and contributed to various products and services offered by the company.",
      "Contributed software engineering expertise across the product lifecycle, from requirements definition through successful deployment.",
      "Excelled in rapid application development and management of technological issues for assigned projects, earning high customer satisfaction ratings.",
      "Introduced methodologies and best practices that enhanced product definition, release processes, and customization to user needs.",
    ],
  },
  {
    role: "Geotechnical Engineering Technician, Field and Laboratory",
    org: "WSP Canada Inc.",
    dates: { start: "April 2018", end: "December 2018" },
    details: [
      "Employed as a QA technician, assisted engineers in lab testing and on-site inspection.",
      "Supported geotechnical investigations including surveying, sampling, and preparing field borehole records.",
    ],
  },
  {
    role: "Geotechnical Engineering Technician, Field and Laboratory",
    org: "Aecon Group Inc.",
    dates: { start: "July 2016", end: "April 2018" },
    details: [
      "Employed as a QC technician, assisted engineers in lab testing and on-site inspection.",
      "Supported geotechnical investigations including surveying, sampling, and preparing field borehole records.",
    ],
  },
] as Array<Employment>
