import './App.css';
import CreateButton from "../components/CreateButton";
import "./style.css";
import ListEntities from "../components/ListEntities";
import Initial from "../pages/create-delete/Initial";
import Create from "../pages/create-delete/Create";
import {Route, Routes} from "react-router-dom";
import Edit from "../pages/change/Edit";


function App() {

  return (
      <Routes>
          <Route path="/" element={<Initial/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
  );
}

export default App;
