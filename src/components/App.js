import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/home";
import MainTemplate from "./mainLayout/template/mainTemplate";
import '../css/style.css';
import Login from "./login/login";
import Booklist from "./booklist/booklist";

function App() {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/booklist' element={<Booklist />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default App;
