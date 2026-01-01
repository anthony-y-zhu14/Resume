import configs from '#configs'

export default function View () {
  const {
     name,
     contacts,
     educations,
     employments,
     projects
  } = configs

  return (
    <div id="resume-root" data-render-state="ready">
      <h1>{name}</h1>

      <section>
        <h2>Contacts</h2>
        <ul>
          {contacts.map((c, i) => (
            <li key={i}>
              {c.kind === "location" ? (
                c.label
              ) : (
                <a href={c.href} target="_blank" rel="noreferrer">
                  {c.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Employment</h2>
        {employments.map((e, i) => (
          <article key={i}>
            <strong>{e.role}</strong> – {e.org}
            <br />
            <em>
              {e.dates.start}
              {e.dates.end ? ` – ${e.dates.end}` : ""}
            </em>
            <ul>
              {e.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section>
        <h2>Projects</h2>
        {projects.map((p, i) => (
          <article key={i}>
            <strong>{p.name}</strong> ({p.location})
            <br />
            <em>
              {p.dates.start}
              {p.dates.end ? ` – ${p.dates.end}` : ""}
            </em>
            <ul>
              {p.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>

            {p.link && (
              <div>
                <a href={p.link.href} target="_blank" rel="noreferrer">
                  {p.link.label}
                </a>
              </div>
            )}

            <div>
              <strong>Tech:</strong> {p.technologies.join(", ")}
            </div>
            <div>
              <strong>Skills:</strong> {p.skills.join(", ")}
            </div>
          </article>
        ))}
      </section>

      <section>
        <h2>Education</h2>
        {educations.map((e, i) => (
          <article key={i}>
            <strong>{e.credential}</strong>
            <br />
            {e.institution}
            <br />
            <em>
              {e.dates.start}
              {e.dates.end ? ` – ${e.dates.end}` : ""}
            </em>
          </article>
        ))}
      </section>
    </div>
  );
}