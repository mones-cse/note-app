import React,{useState} from 'react';
import NoteModal from "../../components/Modal/NoteModal";


const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={"col-11"}>
            <button onClick={openModal}>Update</button>
            <NoteModal isModalOpen={isModalOpen} closeModal={closeModal} data={{"a":"some data"}}/>
            Dashboard
        </div>
    );
};

export default Dashboard;
