import './App.css';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import NotFound from "./common/NotFound";
import {Section1} from "./components/Section1";
import {Section2} from "./components/Section2";
import {Section3} from "./components/Section3";

function App() {
    return (
        <div className="App">
            <div className="container">
                <Routes>
                    <Route path="/" element={<Navigate to="/1"/>}></Route>
                    <Route path="/1" element={<Section1/>}/>
                    <Route path="/2" element={<Section2/>}/>
                    <Route path="/3" element={<Section3/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
