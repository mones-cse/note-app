import React, { useState } from "react";
import ModalContext from "./ModalContext";

const ModalProvider = props => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedNote, setSelectedNote] = useState();
    const [isTypeUpdate, setIsTypeUpdate] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <ModalContext.Provider
            value={{
                isModalOpen: isModalOpen,
                openModal: openModal,
                closeModal: closeModal,
                isTypeUpdate: isTypeUpdate,
                selectedNote: selectedNote,
                setSelectedNote: setSelectedNote,
                setIsTypeUpdate: setIsTypeUpdate,
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
