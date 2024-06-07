// Importing components from react-accessible-accordion for creating accessible accordion UI elements.
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from "react-accessible-accordion";

// Importing the CSS file for styling the Forecast component.
import './forecast.css'

// Array of week days.
const week_days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// The Forecast component takes data as a prop.
const Forecast = ({ data }) => {

    // Getting the current day of the week as a number (0-6, where 0 is Sunday).
    const dayInWeek = new Date().getDay();

    // Creating an array of the next 7 days starting from the current day.
    const forecastDays = week_days.slice(dayInWeek, week_days.length).concat(week_days.slice(0, dayInWeek));

    // Logging the forecast days for debugging purposes.
    console.log(forecastDays);

    return (
        <>
            {/* Label for the forecast section */}
            <label className="title">This Week</label>

            {/* Accordion to display the forecast for each day */}
            <Accordion allowZeroExpanded>
                {data.list.slice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    {/* Weather icon */}
                                    <img alt="weather" className="icon-small" src={`icon/${item.weather[0].icon}.png`} />

                                    {/* Day of the week */}
                                    <label className="day">{forecastDays[idx]}</label>

                                    {/* Weather description */}
                                    <label className="desc">{item.weather[0].description}</label>

                                    {/* Min and max temperature */}
                                    <label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                {/* Wind speed */}
                                <div className="daily-details-grid-item">
                                    <label>Wind Speed: </label>
                                    <label>{item.wind.speed} m/s</label> 
                                </div>
                                {/* Pressure */}
                                <div className="daily-details-grid-item">
                                    <label>Pressure: </label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                {/* Humidity */}
                                <div className="daily-details-grid-item">
                                    <label>Humidity: </label>
                                    <label>{item.main.humidity} %</label>
                                </div>
                                {/* Cloudiness */}
                                <div className="daily-details-grid-item">
                                    <label>Clouds: </label>
                                    <label>{item.clouds.all} %</label>
                                </div>
                                {/* Sea level */}
                                <div className="daily-details-grid-item">
                                    <label>Sea Level: </label>
                                    <label>{item.main.sea_level} m</label>
                                </div>
                                {/* "Feels like" temperature */}
                                <div className="daily-details-grid-item">
                                    <label>Feels Like: </label>
                                    <label>{Math.round(item.main.feels_like)} °C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};

// Exporting the Forecast component as the default export.
export default Forecast;
