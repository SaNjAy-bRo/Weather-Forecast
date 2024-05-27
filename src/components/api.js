export const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(new Error('Please enable your location in your browser.'))
    );
  });
};

export const getWeather = async (lat, long) => {
  const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Process the weather data as needed
    // For example, you can extract temperature, description, etc.

    return data;
  } catch (error) {
    throw new Error('Error fetching weather data');
  }
};

export const getForecast = async (lat, long) => {
  const apiKey = 'c698d218db2c18f87ec7f006b54c7588Y';
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Process the forecast data as needed
    // For example, you can extract temperature, description, etc.

    return data;
  } catch (error) {
    throw new Error('Error fetching forecast data');
  }
};
