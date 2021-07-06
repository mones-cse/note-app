import React, { useState } from "react";
import ConfirmationContext from "./ConfirmationContext";

const ConfirmationProvider = props => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [customFunction, setCustomFunction] = useState();
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <ConfirmationContext.Provider
            value={{
                isModalOpen: isModalOpen,
                openModal: openModal,
                closeModal: closeModal,
                customFunction: customFunction,
                setCustomFunction: setCustomFunction,
            }}
        >
            {props.children}
        </ConfirmationContext.Provider>
    );
};

export default ConfirmationProvider;
