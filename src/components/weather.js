import React, { useState } from 'react';
import TemperatureDetails from './TemperatureDetails';

const Weather = ({ weatherData }) => {
  const [showDetails, setShowDetails] = useState(false);

  if (!weatherData) {
    return null;
  }

  const {
    name,
    main: { temp, humidity },
    sys: { sunrise, sunset },
    weather,
    hourlyForecast,
  } = weatherData;

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="mt-8 text-gray-800 font-inter">
      <h2 className="mb-4 text-2xl font-semibold">{name} Weather</h2>
      <p className="text-lg">Temperature: {temp} &deg;C</p>
      <p className="text-lg">Humidity: {humidity} %</p>
      <p className="text-lg">Weather: {weather[0].main}</p>
      <p className="text-lg">Sunrise: {new Date(sunrise * 1000).toLocaleTimeString('en-IN')}</p>
      <p className="text-lg">Sunset: {new Date(sunset * 1000).toLocaleTimeString('en-IN')}</p>

      <button
        onClick={toggleDetails}
        className="px-4 py-2 mt-4 text-white bg-indigo-500 rounded focus:outline-none"
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>

      {/* Pass showDetails as a prop to TemperatureDetails */}
      {showDetails && hourlyForecast && hourlyForecast.length > 0 && (
        <TemperatureDetails temperatures={hourlyForecast} showDetails={showDetails} />
      )}
    </div>
  );
};

export default Weather;
