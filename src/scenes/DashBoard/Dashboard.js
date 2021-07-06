import React, { useState, useEffect, useContext } from "react";
import NotesContext from "../../context/NotesContext";
import Note from "./Note/Note";
import { RiSearchLine } from "react-icons/ri";

const Dashboard = () => {
    const noteCtx = useContext(NotesContext);
    const { notes, isFavOn } = noteCtx;
    const [searchText, setSearchText] = useState("");
    const [filteredNotes, setFilteredNotes] = useState(notes);


    useEffect(() => {
        let tempNote = [...notes];
        console.log(tempNote);
        if (isFavOn) {
            tempNote = tempNote.filter(note => note.isNoteStar === true);
        }
        if (searchText.length > 0) {
            tempNote = tempNote.filter(note =>
                note.noteTitle.toLowerCase().includes(searchText.toLowerCase())
            );
        }
        setFilteredNotes(tempNote);
    }, [notes, searchText, isFavOn]);

    return (
        <div className={"col-11 container-fluid "}>
            <div>
                <div className="input-group flex-nowrap mt-4 p-1 ps-5 pe-5">
                    <span
                        className="input-group-text bg-transparent border-0 border-bottom rounded-0 p-1"
                        id="addon-wrapping"
                    >
                        <RiSearchLine />
                    </span>
                    <input
                        type="text"
                        className="form-control border-0 border-bottom rounded-0 shadow-none"
                        placeholder="Search"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                        value={searchText}
                        onChange={event => setSearchText(event.target.value)}
                    />
                </div>
            </div>
            <div className={"ps-5 mt-5 pe-5"}>
                <h2 className={"mb-4 mt-2"}>Notes</h2>
                <div className={"row gx-3"}>
                    {filteredNotes.map(note => (
                        <Note
                            key={note.id}
                            note={note}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
