import React, { useState, useContext } from "react";
import NoteModal from "../../components/Modal/NoteModal";
import NotesContext from "../../context/NotesContext";
import Note from "./Note/Note";

const Dashboard = () => {
    const noteCtx = useContext(NotesContext);
    const { notes } = noteCtx;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedNote,setSelectedNote] = useState();
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const noteModalHandler = (note) =>{
        setSelectedNote(note);
        openModal();
    };

    return (
        <div className={"col-11 container-fluid "}>
                <div className={"row gx-3"}>
                    {notes.map(note => (
                        <Note key={note.id} note={note} openModal={openModal} noteModalHandler={noteModalHandler}/>
                    ))}
                </div>
            <NoteModal isModalOpen={isModalOpen}  closeModal={closeModal} isTypeUpdate={true} selectedNote={selectedNote}/>
        </div>
    );
};

export default Dashboard;
