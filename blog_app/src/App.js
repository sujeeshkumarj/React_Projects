// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Addpost from './Components/Addpost';
import Viewblog from './Components/Viewblog';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' exact element={<Viewblog/>}/>
        <Route path='/addpost' exact element={<Addpost/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
