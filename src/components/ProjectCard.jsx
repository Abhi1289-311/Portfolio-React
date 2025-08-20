export default function ProjectCard({ title, desc, liveUrl }) {
  return (
    <article className="card">
      <div className="card-body">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div className="card-actions">
        <a className="btn-outline" href={liveUrl} target="_blank" rel="noreferrer">Live Demo</a>
      </div>
    </article>
  );
}
