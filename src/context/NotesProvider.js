import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import NotesContext from "./NotesContext";

const NotesProvider = props => {
    const [isFavOn, setIsFavOn] = useState(false);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        let temp = localStorage.getItem("notes");
        temp = JSON.parse(temp);
        if (temp) {
            setNotes(temp);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    return (
        <NotesContext.Provider
            value={{
                notes: notes,
                isFavOn: isFavOn,
                toggleFav: () => {
                    setIsFavOn(!isFavOn);
                },
                addNote: note => {
                    let temp = {};
                    temp = { ...note };
                    temp.id = uuidv4();
                    setNotes(notes => [...notes, temp]);
                },
                deleteNote: id => {
                    let tempNotes = [...notes];
                    const noteIndex = tempNotes.findIndex(
                        each => each.id === id
                    );
                    if (noteIndex !== -1) {
                        tempNotes.splice(noteIndex, 1);
                        setNotes(notes => tempNotes);
                    }
                },
                updateNote: note => {
                    console.log("note updated called", { note });
                    let tempNotes = [...notes];
                    const noteIndex = tempNotes.findIndex(
                        each => each.id === note.id
                    );
                    if (noteIndex !== -1) {
                        tempNotes[noteIndex] = note;
                        setNotes(notes => tempNotes);
                    }
                },
            }}
        >
            {props.children}
        </NotesContext.Provider>
    );
};

export default NotesProvider;
