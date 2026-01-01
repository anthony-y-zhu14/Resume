import contacts, { type Contact } from '#configs/contacts.js'
import projects, { type Project } from '#configs/projects.js'
import employments, { type Employment } from '#configs/employments.js'
import educations, { type Education } from '#configs/educations.js'

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
