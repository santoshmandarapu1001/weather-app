import React, { useState } from 'react'

function Temperature() {
    const [city,setCity]=useState("")
    const [result,setResult]=useState("")

        let changeHandler=e=>{
            setCity(e.target.value)
        }

        let submitHandler=(e)=>
        {
            e.preventDefault();
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
            .then (
                response=>response.json())
                .then(data=>{
                    let kelvin=data.main.temp;
                    let celsius=kelvin-273.15;
                    setResult("temperature in "+ city +" is "+ Math.round(celsius)+"℃")
                    setCity("")
                }).catch(error=>console.log(error))
                
            
        }

  return (
    <div>
        <div class="card text-center">
        <div class="card-header">
            <h1>Weather App</h1>
        </div>
        <div class="card-body">
             <form onSubmit={submitHandler}>
                <label>Enter CityName : </label> 
                <input type='text' value={city} onChange={changeHandler}></input><br></br><br></br>
                <input type='submit'  class="btn btn-primary" value="Get Temperature"></input>
             </form>
            
        </div>
        <div class="card-footer text-muted">
            <h4>{result}</h4>
        </div>
        </div>
    </div>
  )
}

export default Temperature