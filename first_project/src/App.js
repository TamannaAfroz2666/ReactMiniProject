// import logo from './logo.svg';
// import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/ShowCountry/Countries';

function App() {
 
  return (
    <div className="App">
      <Countries></Countries>

    

     

      
    </div>
  );
}

// add new component 

// function ExternalUsers(){
//   const [users, setUsers] = useState([]);
//   useEffect(()=>{
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(res =>res.json())
//     .then(data =>{
//       console.log('the api list is:', data);
//      setUsers(data);
//      console.log('the user data is ', users);
      

//     })

//   },[])
//   return(
//     <div>
     
//      {/* call the country component  */}
//      <LoadCountrys></LoadCountrys>

//       {/* {
//         users.map((user) =>{
//           return(
//             <User userName = {user.name} userEmail = {user.email} ></User>
//           )
//         })
//       } */}
//     </div>
//   )
// }

// country component 
// function LoadCountrys(){
//   const  [countries, setCountries] = useState([]);
//   useEffect(() =>{
//     // get api called in way of fetch
//     fetch(`https://restcountries.com/v3.1/all`)
//     .then(res => res.json())
//     .then(data =>{
//       console.log( 'country data is',data);
//       setCountries(data);
//     })

//   },[])
//   return(
//     <div>
//       <h1>Visiting every country of the world</h1>
//       <h5>the lenght of the country is : {countries.length}</h5>

//       {
//         countries.map((country) => {
//           return(
//             <CountryShow CountryName = {country.name.common} population = {country.population}></CountryShow>
//           )
//         })
//       }
//     </div>
//   )
// }

// // data show korar jonno alada component create 

// function CountryShow (props){
//   return(
//     <div>
//       <h1>Country name: {props.CountryName} </h1>
//       <p>population is: {props.population}</p>
//     </div>
//   )
// }

// show the name of user component 
// function User(props){
//   return(
//     <div>
//       <h1>User name is: {props.userName}</h1>
//       <h2>user email is : {props.userEmail}</h2>
//     </div>
//   )
// }




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
