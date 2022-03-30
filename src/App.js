
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Abouts from './components/Abouts/Abouts';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
      <Route path="/" element ={<Home/>}></Route>
      <Route path="/friends" element={<Friends></Friends>}></Route>
      <Route path="/about" element={<Abouts></Abouts>}></Route>
      <Route path="*" element={<NotFound></NotFound>} ></Route>
    </Routes>
    </div>
  );
}

export default App;
