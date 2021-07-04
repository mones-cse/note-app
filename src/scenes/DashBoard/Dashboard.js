import React, { useState, useContext } from "react";
import NotesContext from "../../context/NotesContext";
import NoteModal from "../../components/Modal/NoteModal";
import Note from "./Note/Note";
import { RiSearchLine } from "react-icons/ri";

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
            <div>
                <div className="input-group flex-nowrap mt-4 p-1 ps-5 pe-5">
                    <span className="input-group-text bg-transparent border-0 border-bottom rounded-0 p-1" id="addon-wrapping">
                        <RiSearchLine/>
                    </span>
                    <input type="text" className="form-control border-0 border-bottom rounded-0 shadow-none" placeholder="Search" aria-label="Username"
                           aria-describedby="addon-wrapping"/>
                </div>
            </div>
            <div className={"ps-5 mt-5 pe-5"}>
                <h2 className={"mb-4 mt-2"}>Notes</h2>
                <div className={"row gx-3"}>
                    {notes.map(note => (
                        <Note key={note.id} note={note} openModal={openModal} noteModalHandler={noteModalHandler}/>
                    ))}
                </div>
            </div>


            <NoteModal isModalOpen={isModalOpen}  closeModal={closeModal} isTypeUpdate={true} selectedNote={selectedNote}/>
        </div>
    );
};

export default Dashboard;
