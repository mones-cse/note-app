import React, { useState ,useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import NotesContext from "./NotesContext";

const NotesProvider = props => {
    const [isFavOn, setIsFavOn] = useState(false);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        let temp = localStorage.getItem('notes');
        temp =JSON.parse(temp);
        if (temp){
            setNotes(temp);
        }
    }, []);

    useEffect(()=>{
        localStorage.setItem('notes',JSON.stringify(notes));
    },[notes]);

    return (
        <NotesContext.Provider
            value={{
                notes: notes,
                toggleFav: () => {
                    setIsFavOn(!isFavOn);
                },
                addNote: note => {
                    let temp = {};
                    temp = { ...note };
                    temp.id = uuidv4();
                    setNotes(notes => [...notes, temp]);
                },
            }}
        >
            {props.children}
        </NotesContext.Provider>
    );
};

export default NotesProvider;
