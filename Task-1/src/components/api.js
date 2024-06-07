// Configuration options for the GeoDB API request.
export const geoApiOptions = {
	method: 'GET', // Setting the HTTP method to GET.
	headers: {
		'x-rapidapi-key': 'd09e94842bmshca9e004a4c4e4d5p135720jsn6a0f490f5b91', // API key for authentication.
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com' // The host for the GeoDB API.
	}
};

// Base URL for the GeoDB API.
export const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

// Base URL for the OpenWeatherMap API.
export const Weather_Api_url = "https://api.openweathermap.org/data/2.5";

// API key for the OpenWeatherMap API.
export const Weather_Api_key = "a9506d00edcef9283705bebe4dd259f4";
