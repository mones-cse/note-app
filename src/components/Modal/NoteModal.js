import React, { useState,useContext } from "react";
import Modal from "react-modal";
import { IoCloseSharp } from "react-icons/io5";
import ColorPickers from "../ColorPicker/ColorPicker";
import "./NoteModal.scss";
import NotesContext from "../../context/NotesContext";

Modal.setAppElement("#root");

const NoteModal = ({ isModalOpen, closeModal }) => {
    const noteCtx = useContext(NotesContext);
    const [color, setColor] = useState("#FFC971");
    const [noteTitle, setNoteTitle] = useState("");
    const [noteDetails, setNoteDetails] = useState("");
    const [isNoteStar, setIsNoteStar] = useState(false);
    const currentDate = new Date();

    const handleSubmit = event => {
        event.preventDefault();
        const note = {};
        note.color = color;
        note.noteTitle = noteTitle;
        note.noteDetails = noteDetails;
        note.isNoteStar = isNoteStar;
        note.lastUpdateDate = currentDate.toString();
        console.log({ note });
        noteCtx.addNote(note);
    };

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
                <form onSubmit={handleSubmit}>
                    <p className={"note-date mt-4"}>
                        {currentDate.toDateString()}
                    </p>
                    <div className="mb-3">
                        <label htmlFor="noteTitle" className="form-label">
                            Note Title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="noteTitle"
                            value={noteTitle}
                            onChange={event => setNoteTitle(event.target.value)}
                        />
                        {/*<div id="" className="form-text">We'll never share your email with anyone else.</div>*/}
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="noteTitleDetails"
                            className="form-label"
                        >
                            Note Details
                        </label>
                        <textarea
                            type="text"
                            className="form-control"
                            id="noteTitleDetails"
                            style={{ minHeight: "158px" }}
                            value={noteDetails}
                            onChange={event =>
                                setNoteDetails(event.target.value)
                            }
                        />
                    </div>
                    <div className="mb-4 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                            checked={isNoteStar}
                            onChange={() =>
                                setIsNoteStar(isNoteStar => !isNoteStar)
                            }
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
                        <ColorPickers color={color} setColor={setColor} />
                        <div className={"ms-auto"}>
                            <button className={"btn btn-lg btn-dark"}>
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default NoteModal;
