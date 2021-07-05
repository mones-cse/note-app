import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import NotesProvider from "./context/NotesProvider";
import Dashboard from "./scenes/DashBoard/Dashboard";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <NotesProvider>
            <div className="container-fluid">
                <div className={"row"}>
                    <Sidebar />
                    <Dashboard/>
                </div>
                <ToastContainer />
            </div>
        </NotesProvider>
    );
}

export default App;
