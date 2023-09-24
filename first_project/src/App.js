// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // const nayoks = ['sakib', 'kobir', 'omuk', 'tomuk', 'taimur']
  return (
    <div className="App">

      {/* {
        nayoks.map(nayok => 
          <Person  name= {nayok}></Person>
        )
      } */}

      <ExternalUsers></ExternalUsers>
    </div>
  );
}

// add new component 

function ExternalUsers(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res =>res.json())
    .then(data =>{
      console.log('the api list is:', data);
     setUsers(data);
     console.log('the user data is ', users);
      

    })

  },[])
  return(
    <div>
      <h1>External users</h1>
    </div>
  )
}




// add new component create 
// function Person(props) {
  
//   console.log('the props is:', props);
//   return (
//     <div className='conatiner'>
//       <h1>nayok name is {props.name} </h1>
//       <h1 >hello react app with data passing or called props IN {props.title}</h1>
//        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, tempora.</p>
//        <h3>logic appliy </h3>

//     </div>


//   )
// }
export default App;
