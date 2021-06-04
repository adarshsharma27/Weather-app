import {React,useState,useEffect} from 'react'
import './Weather.css'
import  {FaCloud}  from "react-icons/fa";
const Weather = () => {

const[search,setSearch]=useState('meerut');
const[weather, setWeather]=useState('');
const[name,setName]=useState('')


useEffect(()=>{
  const getWeather=async ()=>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ef5d121e2ae996e3984d4b454a59312e`;
    const response = await fetch(url);
    const resdata= await response.json();
    setWeather(resdata.main);
    setName(resdata.name)
}
 getWeather();

},[search])

    return (
        <>
      <section className=" container-fluid bg-light weather-app">
          <div class="container h-100 w-100 py-4 mx-auto" >
              <h2 class=" text-center">Weather App</h2>
              <div class="row ">
                <div class="col-md-12 col-md-4  col-sm-12 mx-auto py-5" >
                    <input type="search" class="form-control py-4 rounded-lg "   onChange={(event)=>setSearch(event.target.value)} placeholder="Name" value={search} name="name" />
                </div>
              </div>
              <div className="row">
                <div className=" col-lg-4 col-md-6 col-sm-12 ">
                    <div className="card-service" >
                      <main>
                          <div className="icon">
                            <FaCloud/>
                          </div>
                          {!weather ? 
                          (
                          <p className="text-danger">No Data Found</p>
                          ) :
                          (
                          <div>
                            <h1 className="pt-2">{name}°C </h1>
                            <h2>Temperature: <span>{weather.temp}°C </span></h2>
                            <h3>Max-Temperature: <span>{weather.temp_min}°C </span></h3>
                            <h3>Min-Temperature:<span> {weather.temp_max}°C </span></h3>
                          </div>
                          )}
                      </main>
                    </div>
                </div>
                <div className=" col-lg-8 col-md-6 col-sm-12 ">
                    <div className="card-service d-block">
                      {!weather ? 
                      (
                      <p className="text-danger">No Data Found</p>
                      ) :
                      (
                      <div className="more-details">
                          <div className=" more more-details-1">
                            <span>Humidity:</span>
                            <h3>{weather.humidity}</h3>
                          </div>
                          <div className=" more more-details-2">
                            <span>Pressure</span> 
                            <h3>{weather.pressure}</h3>
                          </div>
                          <div className=" more more-details-3">
                            <span>Sea Level</span> 
                            <h3>{weather.sea_level}</h3>
                          </div>
                          <div className=" more more-details-4">
                            <span>Ground Level</span> 
                            <h3>{weather.grnd_level}</h3>
                          </div>
                      </div>
                      )}
                    </div>
                </div>
              </div>
          </div>
        </section>
        </>
    )
}

export default Weather
