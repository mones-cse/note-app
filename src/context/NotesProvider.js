import NotesContext from "./NotesContext";

import React from "react";

const NotesProvider = props => {
    return (
        <NotesContext.Provider value={{
            notes:'asda'
        }}>
            {props.children}
        </NotesContext.Provider>
    );
};

export default NotesProvider;
