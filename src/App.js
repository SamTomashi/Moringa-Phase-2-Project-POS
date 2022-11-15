import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header'
import Pos from './components/Pos';
import Footer from './components/Footer';
import Orders from "./components/Orders";
import {
  BrowserRouter as Router,
  Routes,
  Route, Navigate} from "react-router-dom";
library.add(fab, faPlus, faMinus)

function App() {
  return (
    
    <div className="container">
        <Router>
          <Header/>
          <Routes>
            <Route  path='/pos' element={<Pos/>} />
            <Route  path='/orders' element={<Orders/>} />
            <Route path="/" element={<Navigate to="/pos" />} />
          </Routes>
        </Router>
        <Footer/>
    </div>
    
  );
}

export default App;
