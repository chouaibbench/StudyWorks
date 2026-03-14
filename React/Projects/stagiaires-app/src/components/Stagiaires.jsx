import { useSelector, useDispatch } from "react-redux";
import { setFilterGroup, decrementNoteDiscipline} from "../store/stagaireSlice";
import {addAbsence } from "../store/absanceSlice";

export default function Stagiaires() {
    const dispatch = useDispatch();
    const{ list, filterGroup } = useSelector(state => state.Stagiaires);

    const filtered = filterGroup === "all" ? list : list.filter(s => s.groupe === filterGroup);
    
    return (
        <div className="container">
            <h2>Stagiares</h2>

            <select 
                className="form-select mb-3"
                value={filterGroup}
                onChange={(e) => dispatch(setFilterGroup(e.target.value))}
            >
                <option value="all"></option>
                <option value="DEV101"></option>
                <option value="DEV102"></option>
            </select>

            {filtered.map(s =>(
                <div key={s.id} className="card mb-2 p-2">
                    <strong>{s.nom}</strong> — {s.groupe} — Disipline: {s.discpline}

                    <div>
                        <button
                             className="btn btn-warning btn-sm me-2"
                             onClick={() => dispatch(decrementNoteDiscipline(s.id))}
                        >
                        - Note
                        </button>
                        <button
                             className="btn btn-danger btn-sm"
                             onClick={() => dispatch(addAbsence({ id: s.id, nom: s.nom, groupe: s.groupe }))}
                        >   
                            Add Absence
                        </button>

                    </div>
                </div>
            ))}
        </div>
    )
}