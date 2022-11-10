import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Orders from './components/Orders';
import Footer from './components/Footer';

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
