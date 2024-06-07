// Importing the CSS file for styling the CurrentWeather component.
import "./current-weather.css"

// The CurrentWeather component takes data as a prop.
const CurrentWeather = ({ data }) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    {/* Displaying the city name. */}
                    <p className="city">{data.city}</p>
                    {/* Displaying the weather description. */}
                    <p className="weather-desc">{data.weather[0].description}</p>
                </div>
                {/* Displaying the weather icon. */}
                <img alt="weather" className="weather-icon" src={`icon/${data.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <div className="temperature">
                    {/* Displaying the current temperature. */}
                    <p className="temp">{Math.round(data.main.temp)}°C</p>
                    
                    {/* Displaying the maximum temperature. */}
                    <div className="para-row">
                        <span className="para-label">Max T:</span>
                        <span className="para-value">{Math.round(data.main.temp_max)}°C </span>
                    </div>
                    {/* Displaying the minimum temperature. */}
                    <div className="para-row">
                        <span className="para-label">Min T:</span>
                        <span className="para-value">{Math.round(data.main.temp_min)}°C</span>
                    </div>
                </div>
                <div className="details">
                    <div className="para-row">
                        <span className="para-label top">Details</span>
                    </div>
                    {/* Displaying the "feels like" temperature. */}
                    <div className="para-row">
                        <span className="para-label">Feels like </span>
                        <span className="para-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    {/* Displaying the wind speed. */}
                    <div className="para-row">
                        <span className="para-label">Wind </span>
                        <span className="para-value">{data.wind.speed} m/s</span>
                    </div>
                    {/* Displaying the humidity level. */}
                    <div className="para-row">
                        <span className="para-label">Humidity </span>
                        <span className="para-value">{data.main.humidity}%</span>
                    </div>
                    {/* Displaying the atmospheric pressure. */}
                    <div className="para-row">
                        <span className="para-label">Pressure </span>
                        <span className="para-value">{data.main.pressure} hPa</span>
                    </div>
                    {/* Displaying the latitude of the location. */}
                    <div className="para-row">
                        <span className="para-label">Latitude: </span>
                        <span className="para-value">{data.coord.lat}°</span>
                    </div>
                    {/* Displaying the longitude of the location. */}
                    <div className="para-row">
                        <span className="para-label">Longitude: </span>
                        <span className="para-value">{data.coord.lon}°</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Exporting the CurrentWeather component as the default export.
export default CurrentWeather;
