import React,{useState,useContext} from 'react';
import NoteModal from "../../components/Modal/NoteModal";
import NotesContext from "../../context/NotesContext";


const Dashboard = () => {
    const noteCtx = useContext(NotesContext);
    const {notes} =noteCtx;
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
            <button onClick={openModal}>Update</button>
            <NoteModal isModalOpen={isModalOpen} closeModal={closeModal} data={{"a":"some data"}}/>
            Dashboard
            {notes.map(note=><p key={note.id}>{note.noteTitle}</p>)}
        </div>
    );
};

export default Dashboard;
