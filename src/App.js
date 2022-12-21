import './App.css';
import {Route, Routes} from "react-router-dom";
import NotFound from "./common/NotFound";

function App() {
  return (
    <div className="App">
        <header className="App-header">Меню 1, Меню 2, Меню 3
        </header>
        <div className="container">
            <Routes>
                <Route path="/" element={<PersonList/>}/>
                <Route errorElement={<NotFound/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
