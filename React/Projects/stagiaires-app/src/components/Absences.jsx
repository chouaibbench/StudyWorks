import { useSelector } from "react-redux";

export default function Absences() {
  const abs = useSelector(state => state.absences.list);

  const sorted = [...abs].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="container">
      <h2>Absences</h2>

      {sorted.map((a, i) => (
        <div key={i} className="card mb-2 p-2">
          <strong>{a.nom}</strong> — {a.groupe}  
          <br />
          <small>{new Date(a.date).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}
