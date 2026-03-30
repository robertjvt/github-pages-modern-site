import { useMemo, useState } from 'react';

const tech = ['Astro', 'React', 'TypeScript', 'MDX', 'GitHub Pages'];

export default function StackShowcase() {
  const [index, setIndex] = useState(0);
  const active = useMemo(() => tech[index], [index]);

  return (
    <section className="stack-showcase">
      <h2>Modern Stack Ready</h2>
      <p>
        This site combines Astro for content performance with React islands for client-side interactivity.
      </p>
      <div className="pill-row">
        {tech.map((item, i) => (
          <button
            key={item}
            type="button"
            className={i === index ? 'pill active' : 'pill'}
            onClick={() => setIndex(i)}
          >
            {item}
          </button>
        ))}
      </div>
      <p>
        Selected: <strong>{active}</strong>
      </p>
    </section>
  );
}
