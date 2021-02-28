
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';

function App() {
  const [countries,setCountries] = useState([]);
  const url="https://restcountries.eu/rest/v2/all";
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setCountries(data);
      // console.log(data);
    })
    .catch(error=>console.log("Api do not found"));
  },[]);
  return (
    <div className="App">
      <h1>Country Loaded : {countries.length}</h1>
      <div className="container">
          {countries.map(country=><Country name={country} key={country.alpha3Code}></Country>)}
      </div>
    </div>
  );
}

export default App;
