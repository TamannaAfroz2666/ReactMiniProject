// import logo from './logo.svg';
import './App.css';
import About from './components/About/About';
// import AssignmentMark from './components/AssignmentMarks/AssignmentMark';
// import PhoneBar from './components/PhoneBar/PhoneBar';
import Header from './components/Header/Header';
import { Route,  Routes } from 'react-router-dom';
// import Home from './components/Home/Home';
// import About from './components/About/About';
// import Main from './Layout/Main/Main';
// import NotFoundPage from './components/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div>

      {/* or easy way routes used   */}
      <Header></Header> 
      <Routes>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
   
    </div>
  );
}

export default App;
