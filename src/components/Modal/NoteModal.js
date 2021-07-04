import React, { useState } from "react";
import Modal from "react-modal";
import { IoCloseSharp } from "react-icons/io5";
import ColorPickers from "../ColorPicker/ColorPicker";
import "./NoteModal.scss";

Modal.setAppElement("#root");

const NoteModal = ({ isModalOpen, closeModal }) => {
    const [color, setColor] = useState("#FFC971");

    const customStyles = {
        overlay: {
            backgroundColor: "#00000070",
        },
        content: {
            minHeight: "550px",
            minWidth: "754px",
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
    const handleCloseModal = () => {
        closeModal(false);
    };
    const afterOpenModal = () => {
        console.log("after modal open");
    };

    return (
        <Modal
            isOpen={isModalOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={handleCloseModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className={"container custom-modal"}>
                <p className={"w-100 text-center note-title"}>New Note</p>
                <IoCloseSharp className={"note-close"} onClick={closeModal} />
                <form>
                    <p className={"note-date mt-4"}>January 12, 2020</p>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                        >
                            Note Title
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                        {/*<div id="" className="form-text">We'll never share your email with anyone else.</div>*/}
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                        >
                            Note Details
                        </label>
                        <textarea
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            style={{ minHeight: "158px" }}
                        />
                    </div>
                    <div className="mb-4 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                        >
                            {" "}
                            Make this note star
                        </label>
                    </div>
                    <div className={"mb-3 d-flex"}>
                        <ColorPickers color={color} setColor={setColor}/>
                        <div className={"ms-auto"}>
                            <button className={"btn btn-lg btn-dark"} >Save</button>
                        </div>
                    </div>
                                </form>
            </div>
        </Modal>
    );
};

export default NoteModal;