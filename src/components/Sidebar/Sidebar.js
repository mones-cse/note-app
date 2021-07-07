import React, { useContext } from "react";

import ModalContext from "../../context/ModalContext";
import NotesContext from "../../context/NotesContext";

import Logo from "../../assets/logo.svg";
import { AiFillPlusCircle } from "react-icons/ai";
import { GiAlliedStar } from "react-icons/gi";

const Sidebar = () => {
    const noteCtx = useContext(NotesContext);
    const modalCtx = useContext(ModalContext);
    const addNoteHandler = () => {
        modalCtx.setIsTypeUpdate(false);
        modalCtx.openModal();
    };
    return (
        <div className={"col-1 min-vh-100 text-center border-end"}>
            <img className={"mt-5"} src={Logo} alt="" />
            <br />
            <GiAlliedStar
                className={"mt-5"}
                size="48px"
                onClick={() => noteCtx.toggleFav()}
            />
            <br />
            <AiFillPlusCircle
                className={"mt-3"}
                size="58px"
                onClick={addNoteHandler}
            />
        </div>
    );
};
export default Sidebar;
