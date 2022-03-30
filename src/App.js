import { BrowserRouter, Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses/Courses";
import Home from "./Home/Home/Home";
import Login from "./Home/Login/Login/Login";
import Register from "./Home/Login/Register/Register";
import NotFound from "./NotFound/NotFound";

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Home/Header/Header";
import Footer from "./Home/Footer/Footer";
import AuthProvider from "./Context/AughProvider/AuthProvider";
import PrivateRoute from "./Home/Login/PrivateRoute/PrivateRoute";


function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/courses" element={<PrivateRoute><Courses /></PrivateRoute>} />

          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />

          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      </AuthProvider>
     
    </div>
  );
}

export default App;
