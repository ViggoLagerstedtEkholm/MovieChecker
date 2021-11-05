import './css/style.css';
import './css/header.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Showcase from "./Components/Main/Showcase";
import MovieInformation from "./Components/Display/MovieInformation";
import Navigation from "./Components/Header/Navigation";

function App() {
  return (
      <BrowserRouter>
          <Navigation/>
          <Routes>
              <Route path="/" element={<Showcase/>} />
              <Route path="/info/:ID" element={<MovieInformation/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
