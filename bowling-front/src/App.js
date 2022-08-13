import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import ScoreBoard from './components/ScoreBoard';


function App() {
  return (
    <BrowserRouter>
    <div>
    <Routes>
    
    <Route path="/" element={<HomePage />} exact={true}></Route>
    <Route path="/scoreBoard" element={<ScoreBoard />} exact={true}></Route>
    

    </Routes>
    </div>
    </BrowserRouter>
   
  );
}

export default App;