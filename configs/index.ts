import contacts, { type Contact } from './contacts.js'
import projects, { type Project } from './projects.js'
import employments, { type Employment } from './employments.js'
import educations, { type Education } from './educations.js'

export interface Config {
  name: string
  contacts: Array<Contact>
  employments: Array<Employment>
  projects: Array<Project>
  educations: Array<Education>
}

export default {
  name: 'Anthony Y. Zhu',
  contacts,
  employments,
  projects,
  educations
} as Config
