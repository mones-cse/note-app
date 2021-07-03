import React from "react";
import NotesContext from "../../context/NotesContext";

const Sidebar = () => {
    return <NotesContext.Consumer>
        {contex =>(
            <div>Sidebar {contex.notes}</div>
        )}

    </NotesContext.Consumer>;
};

export default Sidebar;
