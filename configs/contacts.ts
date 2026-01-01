export interface Contact {
  kind: 'link' | 'phone' | 'location'
  label: string
  href?: string
}

export default [
  { kind: "link", label: "anthonyzhu1114@gmail.com", href: "mailto:anthonyzhu1114@gmail.com" },
  { kind: "phone", label: "+1 613 252 7730", href: "tel:+16132527730" },
  { kind: "location", label: "Ottawa, Ontario, Canada" },
  { kind: "link", label: "linkedin.com/in/anthony-y-zhu", href: "https://www.linkedin.com/in/anthony-y-zhu/" },
  { kind: "link", label: "github.com/anthony-y-zhu14", href: "https://github.com/anthony-y-zhu14" }
] satisfies Array<Contact>
