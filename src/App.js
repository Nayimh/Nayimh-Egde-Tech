import { BrowserRouter, Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses/Courses";
import Home from "./Home/Home/Home";
import Login from "./Home/Login/Login/Login";
import Register from "./Home/Login/Register/Register";
import NotFound from "./NotFound/NotFound";

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Home/Header/Header";
import Footer from "./Home/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/courses" element={<Courses />} />

          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />

          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
