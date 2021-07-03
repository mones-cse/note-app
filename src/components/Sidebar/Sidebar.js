import React, {useState} from "react";
import NotesContext from "../../context/NotesContext";
import Logo from "../../assets/logo.svg";
import {AiFillPlusCircle} from 'react-icons/ai';
import {GiAlliedStar} from 'react-icons/gi';
import NoteModal from "../Modal/NoteModal";

const Sidebar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return <NotesContext.Consumer>
        {ctx => (
            <div className={"col-1 min-vh-100 text-center border-end"}>
                <img className={"mt-5"} src={Logo} alt=""/>
                <br/>
                <AiFillPlusCircle className={"mt-5"} size='48px' onClick={openModal}/>
                <br/>
                <GiAlliedStar className={"mt-2"} size='58px' onClick={() => ctx.toggleFav()}/>
                <NoteModal isModalOpen={isModalOpen} closeModal={closeModal}/>
            </div>
            )}

            </NotesContext.Consumer>;
        };

        export default Sidebar;
