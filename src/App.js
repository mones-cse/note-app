import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import NotesProvider from "./context/NotesProvider";
import ModalProvider from "./context/ModalProvider";
import Dashboard from "./scenes/DashBoard/Dashboard";
import { ToastContainer } from "react-toastify";
import NoteModal from "./components/Modal/NoteModal";
import React from "react";
import ModalContext from "./context/ModalContext";

function App() {
    return (
        <NotesProvider>
            <ModalProvider>
                <div className="container-fluid">
                    <div className={"row"}>
                        <Sidebar />
                        <Dashboard />
                    </div>
                    <ToastContainer />
                </div>
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
            </ModalProvider>
        </NotesProvider>
    );
}

export default App;
