import './App.css';
import Home from './components/Home.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Todos from './components/to-dos';
import Add from './components/Add';
import Edit from './components/Edit';


function App() {
  return (
    <div className="App">
      <Router key="router">
          <Routes key="route">
            <Route path="/" element={<Home/>} />
            <Route path="/create" element={<Add/>}  />
            <Route path="/edit" element={<Edit/>}/>

          </Routes>
      </Router>
    </div>
  );
}

export default App;
