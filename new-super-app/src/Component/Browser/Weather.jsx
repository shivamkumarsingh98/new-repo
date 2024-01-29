// import React, { useState, useEffect } from 'react';

// function Weather() {
//     const [weatherData, setWeatherData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch("http://api.weatherapi.com/v1/forecast.json?key=987de39fe8924052ada80850232502&q=London&days=5")
//             .then((response) => response.json())
//             .then((data) => {
//                 setWeatherData(data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 setError(error);
//                 setLoading(false);
//             });
//     }, []);

//     return (
//         <div>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : error ? (
//                 <p>Error: {error.message}</p>
//             ) : (
//                 <div >


//                     <h2>Weather in {weatherData.location.name}</h2>
//                     <p>Temperature: {weatherData.current.temp_c}°C</p>
//                     <p>Condition: {weatherData.current.condition.text}</p>

//                 </div>


//             )
//             }

//         </div>
//     );
// }

// export default Weather;

