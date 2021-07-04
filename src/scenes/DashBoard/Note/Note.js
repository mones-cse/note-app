import React from "react";
import { GiAlliedStar } from "react-icons/gi";
import { FiTrash } from "react-icons/fi";
import { RiEditCircleFill } from "react-icons/ri";
import "./note.scss";

const Note = ({note}) => {
    return (
        <div className={"note-container col-lg-4 col-md-6"} >
            <div className={"card"} style={{backgroundColor:note.color}}>
                <div className={"card-body"}>
                    <GiAlliedStar className={"note-star"} />

                    <p className={"note-title"}>{note.noteTitle}</p>
                    <p className={"note-body"}>
                        {note.noteDetails}
                    </p>
                    <p className={"note-date"}>{note.lastUpdateDate.toDateString()}</p>
                    <FiTrash className={"note-delete"} />
                    <RiEditCircleFill className={"note-update"} />
                </div>
            </div>
        </div>
    );
};

export default Note;
