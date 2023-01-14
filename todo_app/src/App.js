// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todoview from './Components/Todoview';
import Addtodo from './Components/Addtodo';


function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path='/' exact element={<Todoview/>}/>
      <Route path='/addtodo' exact element={<Addtodo/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
