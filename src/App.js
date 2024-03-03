import "./App.css";

import Nav from "./components/Nav";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Singup from "./components/Singup";
import PrivateComp from "./components/PrivateComp";
import Login from "./components/Login";
import Addproduct from "./components/Addproduct";
import Productlist from "./components/Productlist";
import Updateproduct from "./components/Updateproduct";



function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route element={<PrivateComp />}>
            <Route path="/" element={<Productlist/>} />
            <Route path="/add" element={<Addproduct/>} />
            <Route path="/profile" element={<h1>helloo</h1>} />
            <Route path="/update/:id" element={<Updateproduct/>} />
            <Route path="/logout" element={<h1>logout</h1>} />
          </Route>
          <Route path="/sing-up" element={<Singup />} />
          <Route path="login" element={<Login />}></Route>
        </Routes>
       
      </Router>
    </div>
  );
}

export default App;
