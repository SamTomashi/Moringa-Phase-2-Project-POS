import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header'
import Orders from './components/Orders';
import Footer from './components/Footer';
library.add(fab, faPlus, faMinus)

function App() {
  return (
    
    <div className="container">
        <Header/>
        <Orders/>
        <Footer/>
    </div>
  );
}

export default App;
