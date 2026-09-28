export default function StatGrid({ stats, columns = 3 }) {
  return (
    <div className={`stat-grid cols-${columns}`}>
      {stats.map((stat) => (
        <article key={stat.label} className="stat">
          <strong>{stat.value}</strong>
          <h3>{stat.label}</h3>
          <p>{stat.text}</p>
          <small>{stat.source}</small>
        </article>
      ))}
    </div>
  )
}
