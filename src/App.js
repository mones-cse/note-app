import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import NotesProvider from "./context/NotesProvider";

function App() {
    return (
        <NotesProvider>
            <div className="App">
                <div className={"text-center bg-dark text-light min-vh-100"}>
                    <Sidebar />
                </div>
            </div>
        </NotesProvider>
    );
}

export default App;
