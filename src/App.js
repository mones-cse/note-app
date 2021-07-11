import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./scenes/DashBoard/Dashboard";

import ModalContext from "./context/ModalContext";
import ConfirmationContext from "./context/ConfirmationContext";

import NotesProvider from "./context/NotesProvider";
import ModalProvider from "./context/ModalProvider";
import ConfirmationProvider from "./context/ConfirmationProvider";

import NoteModal from "./components/Modal/NoteModal";

function App() {
    return (
        <NotesProvider>
            <ModalProvider>
                <ConfirmationProvider>
                    <div className="container-fluid">
                        <div className={"row"}>
                            <Sidebar />
                            <Dashboard />
                        </div>
                    </div>
                    <ToastContainer />
                    {/*why use consumer instead of useContext hooks*/}
                    {/*https://stackoverflow.com/questions/60878229/how-to-provide-and-consume-context-in-the-same-component*/}
                    <ModalContext.Consumer>
                        {modalCtx => (
                            <NoteModal
                                isModalOpen={modalCtx.isModalOpen}
                                closeModal={modalCtx.closeModal}
                                isTypeUpdate={modalCtx.isTypeUpdate}
                                selectedNote={modalCtx.selectedNote}
                            />
                        )}
                    </ModalContext.Consumer>
                </ConfirmationProvider>
            </ModalProvider>
        </NotesProvider>
    );
}

export default App;
