// Importing the useState hook from React.
import { useState } from "react";

// Importing AsyncPaginate from react-select-async-paginate for asynchronous data loading in the select component.
import { AsyncPaginate } from "react-select-async-paginate";

// Importing API options and URL from the api configuration file.
import { geoApiOptions, url } from '../api';

// The Search component takes onSearchChange as a prop.
const Search = ({ onSearchChange }) => {
    
    // Defining a state variable to hold the current search value.
    const [search, setSearch] = useState(null);

    // Function to load options based on user input.
    const loadOptions = (inputValue) => {
        // Fetching city data from the API based on the user's input.
        return fetch(`${url}/cities?minPopulation=100&namePrefix=${inputValue}`, geoApiOptions)
        .then(response => response.json())
        .then(response => {
            // Logging the response for debugging purposes.
            console.log(response);
            // Mapping the response data to the format expected by AsyncPaginate.
            return {
                options: response.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    };
                })
            };
        })
        // Handling errors and returning an empty options array if an error occurs.
        .catch(err => {
            console.error('Error fetching options:', err);
            return {
                options: [],
            };
        });
    }

    // Function to handle changes in the selected search value.
    const handleOnChange = (searchData) => {
        // Updating the search state with the new value.
        setSearch(searchData);
        // Calling the onSearchChange prop function with the new search data.
        onSearchChange(searchData);
    }

    // Rendering the AsyncPaginate component.
    return (
        <AsyncPaginate
            placeholder="Search for city" // Placeholder text for the input field.
            debounceTimeout={600} // Debounce timeout for input changes to avoid excessive API calls.
            value={search} // Current value of the search input.
            onChange={handleOnChange} // Function to handle changes in the selected value.
            loadOptions={loadOptions} // Function to load options based on user input.
        />
    )
}

// Exporting the Search component as the default export.
export default Search;
