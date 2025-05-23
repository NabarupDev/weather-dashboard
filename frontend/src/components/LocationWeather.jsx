import { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay';

const LocationWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchLocationWeather = async () => {
      try {
        const locationResponse = await fetch('https://ipapi.co/json/');
        const location = await locationResponse.json();
        
        if (location.error) {
          throw new Error('Could not determine location');
        }
        
        const cityName = location.city;
        
        const weatherResponse = await axios.get(`${API_URL}?city=${encodeURIComponent(cityName)}`);
        setWeatherData(weatherResponse.data);
      } catch (err) {
        setError('Could not fetch weather for your location');
      } finally {
        setLoading(false);
      }
    };

    fetchLocationWeather();
  }, [API_URL]);

  if (loading) {
    return (
      <div className="text-center mt-4 sm:mt-6 bg-white rounded-lg shadow-md p-6 sm:p-8">
        <div className="inline-block h-8 w-8 sm:h-10 sm:w-10 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600">Detecting your location and fetching weather...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 sm:p-4 mt-4 sm:mt-6" role="alert">
        <p className="font-bold text-sm sm:text-base">Error</p>
        <p className="text-xs sm:text-sm md:text-base">{error}</p>
        <p className="text-xs sm:text-sm mt-1 sm:mt-2">Please try searching for a city manually.</p>
      </div>
    );
  }

  return (
    <div className="mt-4 sm:mt-6">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-2 sm:mb-3">Weather for your current location:</h2>
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
};

export default LocationWeather;
