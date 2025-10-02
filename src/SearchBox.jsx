import { useState } from "react";   // ✅ must import useState
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({updateinfo}) {
  let [city, setCity] = useState("");
  let [error,setError]=useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "ef5f6e58a9b54cba9de45fe97cad2bf0";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      console.log(jsonResponse); // ✅ check API response in console
      let result={
       city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feelsL_like,
        weather:jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
    throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit =async (evt) => {
   try{
     evt.preventDefault();
    if (city.trim() === "") return; // avoid empty request
   let newinfo =await getWeatherInfo(city);
    setCity(""); // ✅ clear input after submit
    updateinfo(newinfo);
   }
   catch(err){
 setError(true);
   }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color:"red"}}>No such place exists!</p>}
      </form>
    </div>
  );
}
