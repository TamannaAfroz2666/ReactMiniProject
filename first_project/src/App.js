// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* call kora hoyese */}
      <Person title="REACT"></Person>
      <Person></Person>
      <Person></Person>
     
    </div>
  );
}
// add new component create 
function Person(props){
  console.log('the props is:', props);
  return(
    <div className='conatiner'>
       <h1 >hello react app with data passing or called props IN {props.title}</h1>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, tempora.</p>
       <h3>logic appliy </h3>
       
    </div>
    
   
  )
}
export default App;
