import React, { useContext } from "react";
import { GiAlliedStar } from "react-icons/gi";
import { FiTrash } from "react-icons/fi";
import { RiEditCircleFill } from "react-icons/ri";
import "./note.scss";
import NotesContext from "../../../context/NotesContext";
import TextTruncate from "react-text-truncate";
import ModalContext from "../../../context/ModalContext";

const Note = ({ note }) => {
    const notesCtx = useContext(NotesContext);
    const modalCtx = useContext(ModalContext);
    const noteModalHandler = ()=>{
        modalCtx.setIsTypeUpdate(true);
        modalCtx.setSelectedNote(note);
        modalCtx.openModal();
    };
    return (
        <div className={"note-container col-lg-4 col-md-6"}>
            <div className={"card"} style={{ backgroundColor: note.color }}>
                <div className={"card-body"}>
                    {note.isNoteStar && (
                        <GiAlliedStar className={"note-star"} />
                    )}
                    <p
                        className={"note-title text-truncate"}
                        style={{ maxWidth: "90%" }}
                    >
                        {note.noteTitle}
                    </p>

                    <div className={"note-body"}>
                        <TextTruncate
                            line={6}
                            element="span"
                            truncateText="…"
                            text={note.noteDetails}
                        />
                    </div>

                    <p className={"note-date"}>
                        {new Date(note.lastUpdateDate).toDateString()}
                    </p>
                    <FiTrash
                        className={"note-delete"}
                        onClick={() => notesCtx.deleteNote(note.id)}
                    q/>
                    <RiEditCircleFill
                        className={"note-update"}
                        onClick={() => noteModalHandler(note)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Note;
