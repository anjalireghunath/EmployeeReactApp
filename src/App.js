import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AddEmployee from './components/AddEmployee';
import Search from './components/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<AddEmployee/>}/>
      <Route path='/search' exact element={<Search/>}/>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
