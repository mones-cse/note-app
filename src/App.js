import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import NotesProvider from "./context/NotesProvider";
import Dashboard from "./scenes/DashBoard/Dashboard";

function App() {
    return (
        <NotesProvider>
            <div className="container-fluid">
                <div className={"row"}>
                    <Sidebar />
                    <Dashboard/>
                </div>
            </div>
        </NotesProvider>
    );
}

export default App;
