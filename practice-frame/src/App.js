// import logo from './logo.svg';
import './App.css';
import AssignmentMark from './components/AssignmentMarks/AssignmentMark';
import PhoneBar from './components/PhoneBar/PhoneBar';
// import Header from './components/Header/Header';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  const router = createBrowserRouter([
    {path:''},

    {path: 'home', element: <Home></Home>},
    {path: 'about', element: <About></About>}
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      {/* <Header></Header> */}
      <AssignmentMark></AssignmentMark> <br />
      <PhoneBar></PhoneBar>

     
    </div>
  );
}

export default App;
