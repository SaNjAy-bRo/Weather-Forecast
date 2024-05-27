import React from 'react';

const TemperatureDetails = ({ temperatures, showDetails }) => {
  if (!showDetails) {
    return null; // If showDetails is false, don't render anything
  }

  return (
    <div className="mt-8">
      <h3 className="mb-4 text-lg font-semibold">Hourly Forecast</h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {temperatures.map((hour, index) => (
          <div key={index}>
            <p>Time: {new Date(hour.dt * 1000).toLocaleTimeString('en-IN')}</p>
            <p>Morning: {hour.temp.morn} &deg;C</p>
            <p>Day: {hour.temp.day} &deg;C</p>
            <p>Evening: {hour.temp.eve} &deg;C</p>
            <p>Night: {hour.temp.night} &deg;C</p>
            <p>Min: {hour.temp.min} &deg;C</p>
            <p>Max: {hour.temp.max} &deg;C</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemperatureDetails;
