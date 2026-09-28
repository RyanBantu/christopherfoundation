export default function FilterBar({ label, options, value, onChange }) {
  return (
    <div className="filters" role="toolbar" aria-label={label}>
      {options.map((item) => (
        <button
          key={item}
          type="button"
          className={item === value ? "chip is-on" : "chip"}
          aria-pressed={item === value}
          onClick={() => onChange(item)}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
