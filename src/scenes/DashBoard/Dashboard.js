import React, { useState, useContext } from "react";
import NoteModal from "../../components/Modal/NoteModal";
import NotesContext from "../../context/NotesContext";
import Note from "./Note/Note";

const Dashboard = () => {
    const noteCtx = useContext(NotesContext);
    const { notes } = noteCtx;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    console.log(notes);

    return (
        <div className={"col-11"}>
            {/*<button onClick={openModal}>Update</button>*/}
            {/*<NoteModal*/}
            {/*    isModalOpen={isModalOpen}*/}
            {/*    closeModal={closeModal}*/}
            {/*    data={{ a: "some data" }}*/}
            {/*/>*/}

            <div className={"container-fluid"}>
                <div className={"row gx-3"}>
                    {notes.map(note => (
                        <Note key={note.id} note={note}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
