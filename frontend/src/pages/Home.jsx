import { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherDisplay from '../components/WeatherDisplay';
import ErrorMessage from '../components/ErrorMessage';

const Home = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [locationLoading, setLocationLoading] = useState(true);
  const [locationError, setLocationError] = useState('');

  const API_URL = import.meta.env.VITE_API_URL;
  const WAKE_API_URL = import.meta.env.VITE_WAKE_API_URL;

  useEffect(() => {
    // Wake up the backend server
    const wakeBackend = async () => {
      try {
        await axios.get(WAKE_API_URL);
      } catch (err) {
        console.log('Failed to wake backend server');
      }
    };
    
    wakeBackend();
    
    const fetchLocationAndWeather = async () => {
      setLocationLoading(true);
      setLocationError('');
      
      try {
        const locationResponse = await fetch('https://ipapi.co/json/');
        const location = await locationResponse.json();
        
        if (location.error) {
          throw new Error('Could not determine your location');
        }
        
        const cityName = location.city;
        
        setLoading(true);
        const weatherResponse = await axios.get(`${API_URL}?city=${encodeURIComponent(cityName)}`);
        setWeatherData(weatherResponse.data);
        setCity(weatherResponse.data.name); 
      } catch (err) {
        setLocationError('Could not automatically detect your location. Please enter a city name manually.');
      } finally {
        setLocationLoading(false);
        setLoading(false);
      }
    };
    
    fetchLocationAndWeather();
  }, [API_URL, WAKE_API_URL]);

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    setLoading(true);
    setError('');
    
    try {
      const response = await axios.get(`${API_URL}?city=${encodeURIComponent(city)}`);
      setWeatherData(response.data);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleLocationButtonClick = () => {
    setLocationLoading(true);
    setLocationError('');
    
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(location => {
        const cityName = location.city;

        setLoading(true);
        axios.get(`${API_URL}?city=${encodeURIComponent(cityName)}`)
          .then(response => {
            setWeatherData(response.data);
            setCity(response.data.name);
            setLoading(false);
          })
          .catch(() => {
            setError('Failed to fetch weather for your location.');
            setLoading(false);
          });
        setLocationLoading(false);
      })
      .catch(() => {
        // Don't log error details
        setLocationError('Could not detect your location. Please enter a city manually.');
        setLocationLoading(false);
      });
  };

  return (
    <div>
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-8">Check Weather For Your City</h1>
      
      {locationLoading && (
        <div className="text-center mb-4 sm:mb-6">
          <div className="inline-block h-5 w-5 sm:h-6 sm:w-6 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
          <p className="mt-2 text-sm sm:text-base text-gray-600">Detecting your location...</p>
        </div>
      )}
      
      {locationError && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-3 sm:p-4 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base" role="alert">
          <p>{locationError}</p>
        </div>
      )}
      
      <form onSubmit={fetchWeather} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Enter city name"
          className="flex-1 px-3 py-2 text-sm sm:text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base py-2 px-4 sm:px-6 rounded-md transition disabled:opacity-50 cursor-pointer"
        >
          {loading ? 'Loading...' : 'Get Weather'}
        </button>
      </form>

      <div className="text-center mt-3 sm:mt-4 md:mt-5">
        <button 
          onClick={handleLocationButtonClick}
          className="text-blue-600 hover:text-blue-800 font-medium text-xs sm:text-sm md:text-base px-3 py-1.5 rounded-md border border-blue-200 hover:bg-blue-50 transition-colors cursor-pointer"
          disabled={locationLoading || loading}
        >
          <span className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Use my current location
          </span>
        </button>
      </div>

      {loading && (
        <div className="text-center mt-6 sm:mt-8 md:mt-10 p-4">
          <div className="inline-block h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
          <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">Loading weather data...</p>
        </div>
      )}

      <ErrorMessage message={error} />
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
};

export default Home;
