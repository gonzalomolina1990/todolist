import './App.css';
import Home from './components/Home.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Todos from './components/to-dos';


function App() {
  return (
    <div className="App">
      <Router key="router">
          <Routes key="route">
            <Route path="/" element={<Home/>} key="home" />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
