// Importing the required CSS file for styling the App component.
import './App.css';

// Importing the Search component.
import Search from './components/search/search';

// Importing the CurrentWeather component.
import CurrentWeather from './components/current-weather/current-weather';

// Importing API URL and key from the api configuration file.
import { Weather_Api_url, Weather_Api_key } from './components/api';

// Importing useState hook from React.
import { useState } from 'react';

// Importing the Forecast component.
import Forecast from './components/forecast/forecast';

// The main App component.
function App() {

  // Defining state variables to hold the current weather and forecast data.
  const [currentWeather , setCurrentWeather] = useState(null);
  const [forecast , setForecast] = useState(null);

  // Function to handle the search change event.
  const handleOnsearchChange = (searchData) => {
    // Extracting latitude and longitude from the search data.
    const [lat, lon] = searchData.value.split(" ");

    // Fetching current weather data from the API.
    const currentWeatherFetch = fetch(`${Weather_Api_url}/weather?lat=${lat}&lon=${lon}&appid=${Weather_Api_key}&units=metric`);
    
    // Fetching forecast data from the API.
    const ForecastFetch = fetch(`${Weather_Api_url}/forecast?lat=${lat}&lon=${lon}&appid=${Weather_Api_key}&units=metric`);

    // Using Promise.all to handle both fetch requests.
    Promise.all([currentWeatherFetch, ForecastFetch])
    .then(async(response) =>{
      // Parsing the JSON responses.
      const weatherResponse = await response[0].json();
      const ForecastResponse = await response[1].json();

      // Updating state with the fetched data.
      setCurrentWeather({city: searchData.label, ...weatherResponse});
      setForecast({city: searchData.label, ...ForecastResponse});
    })
    // Handling any errors that occur during the fetch process.
    .catch((err) => console.log(err));
  }

  // Logging the current weather and forecast data to the console for debugging purposes.
  console.log(currentWeather);
  console.log(forecast);

  // Rendering the main component UI.
  return (
    <div className="container">
      {/* Rendering the Search component and passing the handleOnsearchChange function as a prop. */}
      <Search onSearchChange={handleOnsearchChange} />

      {/* Conditionally rendering the CurrentWeather component if currentWeather data is available. */}
      {currentWeather && <CurrentWeather data={currentWeather} />}

      {/* Conditionally rendering the Forecast component if forecast data is available. */}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

// Exporting the App component as the default export.
export default App;
