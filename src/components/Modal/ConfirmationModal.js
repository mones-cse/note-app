import React from "react";
import Modal from "react-modal";
import { IoCloseSharp } from "react-icons/io5";
import { AiFillWarning } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./ConfirmationModal.scss";

const ConfirmationModal = props => {
    console.log({ props });
    const afterOpenModal = () => {};
    const handleCloseModal = () => {
        props.closeModal(false);
        props.setCustomFunction(()=>{});
    };
    const handleConfirmation = () => {
        console.log("handle confirmation here");
        props.customFunction();
        notify("Note deleted");
        props.closeModal(false);
    };
    const customStyles = {
        overlay: {
            backgroundColor: "#00000070",
        },
        content: {
            minHeight: "350px",
            minWidth: "600px",
            border: "solid 1px #ddd",
            borderRadius: "20px",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };

    const notify = msg => {
        toast.warn(msg ? msg : "No Proper Message", { autoClose: 3000 });
    };
    return (
        <Modal
            isOpen={props.isModalOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={handleCloseModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className={"container custom-confirmation-modal text-center"}>
                <IoCloseSharp
                    className={"note-close"}
                    onClick={handleCloseModal}
                />
                <div className={"mt-5 mb-3"}>
                    <AiFillWarning size={130} color={"red"} />
                </div>

                <h1 className={"mb-2"}>Are you Sure?</h1>
                <p>
                    Do you really want to delete these record ? <br />
                    This process can't be undone.
                </p>
                <div className={"row flex justify-content-center mb-5"}>
                    <button
                        className={"col-3 m-2 btn btn-secondary btn-lg"}
                        onClick={handleCloseModal}
                    >
                        No
                    </button>
                    <button
                        className={"col-3  m-2 btn btn-danger btn-lg"}
                        onClick={handleConfirmation}
                    >
                        Yes
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default ConfirmationModal;
