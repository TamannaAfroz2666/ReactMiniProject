// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// import AssignmentMark from './components/AssignmentMarks/AssignmentMark';
// import PhoneBar from './components/PhoneBar/PhoneBar';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Product from './components/Product/Product';
// import Main from './Layout/Main/Main';
// import NotFoundPage from './components/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div>
          <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element = {<About></About>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>

      </Routes>


  
      



    </div>
  );
}

export default App;
