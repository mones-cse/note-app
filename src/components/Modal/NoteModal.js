import React, { useState, useContext, useEffect } from "react";
import Modal from "react-modal";
import { IoCloseSharp } from "react-icons/io5";
import ColorPickers from "../ColorPicker/ColorPicker";
import "./NoteModal.scss";
import NotesContext from "../../context/NotesContext";
import validator from "validator";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

Modal.setAppElement("#root");

const NoteModal = ({ isModalOpen, closeModal, isTypeUpdate ,selectedNote}) => {
    const noteCtx = useContext(NotesContext);
    const [color, setColor] = useState("#FFC971");
    const [noteTitle, setNoteTitle] = useState("");
    const [noteDetails, setNoteDetails] = useState("");
    const [isNoteStar, setIsNoteStar] = useState(false);
    const [isNoteTitleClicked, setIsNoteTitleClicked] = useState(false);
    const [isNoteDetailsClicked, setIsNoteDetailsClicked] = useState(false);
    const [noteTitleError, setNoteTitleError] = useState("");
    const [noteDetailsError, setNoteDetailsError] = useState("");

    const noteTitleChangeHandler = event => {
        setIsNoteTitleClicked(true);
        setNoteTitle(event.target.value);
    };
    const noteDetailsChangeHandler = event => {
        setIsNoteDetailsClicked(true);
        setNoteDetails(event.target.value);
    };
    const handleSubmit = event => {
        event.preventDefault();
        const note = {};
        note.color = color;
        note.noteTitle = noteTitle;
        note.noteDetails = noteDetails;
        note.isNoteStar = isNoteStar;
        note.lastUpdateDate = new Date().toString();
        if (isTypeUpdate) {
            note.id = selectedNote.id;
            noteCtx.updateNote(note);
            notify("Note updated");
        } else {
            noteCtx.addNote(note);
            notify("Note Added");
        }
        handleCloseModal();
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
        stateValueReset();
        closeModal(false);
    };
    const stateValueReset = () => {
        setColor("#FFC971");
        setNoteTitle("");
        setNoteDetails("");
        setIsNoteStar(false);
        setIsNoteTitleClicked(false);
        setIsNoteDetailsClicked(false);
    };
    const afterOpenModal = () => {
        if (isTypeUpdate) {
            setColor(selectedNote.color);
            setIsNoteStar(selectedNote.isNoteStar);
            setNoteTitle(selectedNote.noteTitle);
            setNoteDetails(selectedNote.noteDetails);
        }
    };

    useEffect(() => {
        if (
            !validator.isLength(noteTitle.trim(), { min: 1, max: 100 }) &&
            isNoteTitleClicked
        ) {
            setNoteTitleError("Title length can't be more than 100");
        } else {
            setNoteTitleError("");
        }
        if (
            !validator.isLength(noteDetails.trim(), { min: 1, max: 1000 }) &&
            isNoteDetailsClicked
        ) {
            setNoteDetailsError("Details length can't be more than 1000");
        } else {
            setNoteDetailsError("");
        }
    }, [noteTitle, noteDetails]);

    const isDisabled = () => {
        return noteTitleError.trim().length > 0 ||
            noteDetailsError.trim().length > 0
            ? true
            : false;
    };

    const notify = msg => {
        toast.info(msg ? msg : "No Proper Message", { autoClose: 3000 });
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
                <IoCloseSharp
                    className={"note-close"}
                    onClick={handleCloseModal}
                />
                <form onSubmit={handleSubmit}>
                    <p className={"note-date mt-4"}>
                        {new Date().toDateString()}
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
                            onChange={noteTitleChangeHandler}
                        />
                        {noteTitleError.length > 0 && (
                            <div id="" className="form-text text-danger">
                                {noteTitleError}
                            </div>
                        )}
                    </div>
                    {/*todo why on earth height 185px to 190px cause blurry effect*/}
                    <div className="mb-3" style={{ height: "195px" }}>
                        <label
                            htmlFor="noteTitleDetails"
                            className="form-label"
                        >
                            Note Details
                        </label>
                        <textarea
                            type="text"
                            className="form-control "
                            id="noteTitleDetails"
                            style={{ height: "158px" }}
                            value={noteDetails}
                            onChange={noteDetailsChangeHandler}
                        />
                        {noteDetailsError.length > 0 && (
                            <div id="" className="form-text text-danger">
                                {noteDetailsError}
                            </div>
                        )}
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
                            {isTypeUpdate ? (
                                <button
                                    disabled={isDisabled()}
                                    className={"btn btn-lg btn-dark"}
                                >
                                    Update
                                </button>
                            ) : (
                                <button
                                    disabled={isDisabled()}
                                    className={"btn btn-lg btn-dark"}
                                >
                                    Save
                                </button>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default NoteModal;
