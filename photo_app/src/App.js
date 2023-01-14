// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewphoto from './Components/Viewphoto';

function App() {
  return (
    <BrowserRouter>
   <Routes>
      <Route path='/' exact element={<Viewphoto/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
