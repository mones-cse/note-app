import React from "react";
import { GiAlliedStar } from "react-icons/gi";
import { FiTrash } from "react-icons/fi";
import { RiEditCircleFill } from "react-icons/ri";
import "./note.scss";

const Note = () => {
    return (
        <div className={"note-container col-lg-4 col-md-6"}>
            <div className={"card"}>
                <div className={"card-body"}>
                    <GiAlliedStar className={"note-star"} />

                    <p className={"note-title"}>What is Lorem Ipsum?</p>
                    <p className={"note-body"}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                    </p>
                    <p className={"note-date"}>Jan 12. 2021</p>
                    <FiTrash className={"note-delete"} />
                    <RiEditCircleFill className={"note-update"} />
                </div>
            </div>
        </div>
    );
};

export default Note;
