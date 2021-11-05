import './css/style.css';
import './css/header.css';

import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom';
import Showcase from "./Components/Main/Showcase";
import MovieInformation from "./Components/Display/MovieInformation";
import Navigation from "./Components/Header/Navigation";
import NotFound from "./Components/Error/NotFound";

function App() {
  return (
      <HashRouter>
          <Navigation/>
          <Routes>
              <Route path="/" element={<Showcase/>} />
              <Route path="/info/:ID" element={<MovieInformation/>} />
              <Route component={NotFound}/>
          </Routes>
      </HashRouter>
  );
}

export default App;
