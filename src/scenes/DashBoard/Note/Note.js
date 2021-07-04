import React,{useContext,useState} from "react";
import { GiAlliedStar } from "react-icons/gi";
import { FiTrash } from "react-icons/fi";
import { RiEditCircleFill } from "react-icons/ri";
import "./note.scss";
import NotesContext from "../../../context/NotesContext";



const Note = ({note,noteModalHandler}) => {
    const notesCtx = useContext(NotesContext);
    const lastUpdatedDate =new Date(note.lastUpdateDate).toDateString();
    // const test = ()=>{ open};
    return (
        <div className={"note-container col-lg-4 col-md-6"} >
            <div className={"card"} style={{backgroundColor:note.color}}>
                <div className={"card-body"}>
                    {note.isNoteStar && <GiAlliedStar className={"note-star"} />}
                    <p className={"note-title"}>{note.noteTitle}</p>
                    <p className={"note-body"}>
                        {note.noteDetails}
                    </p>
                    {/*<p className={"note-date"}>{note.lastUpdateDate.toDateString()}</p>*/}
                    <p className={"note-date"}>{lastUpdatedDate}</p>
                    <FiTrash className={"note-delete"} onClick={()=>notesCtx.deleteNote(note.id)}/>
                    <RiEditCircleFill className={"note-update"} onClick ={()=>noteModalHandler(note)} />
                </div>
            </div>

        </div>
    );
};

export default Note;
