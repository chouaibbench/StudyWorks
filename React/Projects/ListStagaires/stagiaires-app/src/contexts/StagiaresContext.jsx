import React, { createContext, useState} from 'react';

const stagiareContext = createContext();

export const StaiarProvider = ({children}) => {
    const [stagiares, setStagiares] = useState([
        { id: 1, matricule: '1454', nom: 'Alaoui', ville: 'Casa', codePostal: '20400', moyenne: 12.56 },
        { id: 2, matricule: '1455', nom: 'Mansouri', ville: 'Casa', codePostal: '20400', moyenne: 14.67 },
    ]);

    const addStagiare = (s) => {
        const nextId = stagiares.length ? Math.max(...stagiares.map(x => x.id)) + 1 :1;
        setStagiares(prev => [...prev,{ ...s, id: nextId}]);
    };

    const updateStagiare = (id, updated) => {
        setStagiares(prev = prev.map(s => s.id === Number(id) ? { ...s, ...updated, id:Number(id)} : s));
    };

    const deletStagiare = (id) => {
        setStagiares (prev => prev.filter(s => s.id !== Number(id)));
    };

    return (
        <stagiareContext.Provider value={{stagiares, addStagiare, updateStagiare, deletStagiare}}>
            {children}
        </stagiareContext.Provider>
    );
};

export default stagiareContext;