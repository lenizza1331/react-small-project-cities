import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
const [topCity, setTopCity ] = useState(data);

const removeCity = (id)=>{
  let newCity = topCity.filter(topCity=> topCity.id !== id);
  setTopCity(newCity);
}

  return (
    <div>
      <div className='center'>
        <h1 className='title'>Top {topCity.length} largest cities in the world by population</h1>
      </div>
    {topCity.map((elem=>{
      const {id, city, country, population, square, description, image} = elem;
      return (
        <div key={id}>
        <div className='center title'>
          <h2>{id} - {city}, {country}</h2>
        </div>

        <div className='center numbers'>
        <h4>Population: {population} people</h4>
        <p>The area of the city: {square} sq.m</p>
        </div>

        <div className='box '>
        <img className='photos' src={image} alt="city photo"/>
        </div>

        <div className='box'>
          <div className='center about'>
            <p>{description}</p>
          </div>
        </div>


        <div className='center btn'>
          <button onClick={()=> removeCity(id)}>Remove</button>
        </div>

        <hr className='her'/>
        </div>
      )
    }))}

<div className='center delete'>
  <button onClick={()=>setTopCity([])}>Delete all</button>
</div>

    </div>
  );
}

export default App;
