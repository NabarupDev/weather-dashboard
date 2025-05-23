const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;

  const kelvinToCelsius = (kelvin) => {
    return Math.round(kelvin - 273.15);
  };

  const getWeatherIconUrl = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mt-4 sm:mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="flex items-center">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
              {weatherData.name}, {weatherData.sys.country}
            </h2>
            <div className="flex items-center mt-1 sm:mt-2">
              {weatherData.weather[0].icon && (
                <img
                  src={getWeatherIconUrl(weatherData.weather[0].icon)}
                  alt={weatherData.weather[0].description}
                  className="w-12 h-12 sm:w-16 sm:h-16 mr-2"
                />
              )}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 capitalize">
                {weatherData.weather[0].description}
              </p>
            </div>
            <div className="mt-1 sm:mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">
              {kelvinToCelsius(weatherData.main.temp)}°C
            </div>
            <div className="text-xs sm:text-sm md:text-base text-gray-500 mt-1">
              Feels like{" "}
              {kelvinToCelsius(weatherData.main.feels_like)}°C
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
            <h3 className="text-xs sm:text-sm text-gray-500 font-medium">Humidity</h3>
            <p className="text-lg sm:text-xl md:text-2xl font-bold">{weatherData.main.humidity}%</p>
          </div>
          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
            <h3 className="text-xs sm:text-sm text-gray-500 font-medium">Wind Speed</h3>
            <p className="text-lg sm:text-xl md:text-2xl font-bold">
              {weatherData.wind.speed} m/s
            </p>
          </div>
          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
            <h3 className="text-xs sm:text-sm text-gray-500 font-medium">Pressure</h3>
            <p className="text-lg sm:text-xl md:text-2xl font-bold">
              {weatherData.main.pressure} hPa
            </p>
          </div>
          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
            <h3 className="text-xs sm:text-sm text-gray-500 font-medium">Visibility</h3>
            <p className="text-lg sm:text-xl md:text-2xl font-bold">
              {(weatherData.visibility / 1000).toFixed(1)} km
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
          <h3 className="text-xs sm:text-sm text-gray-500 font-medium">Min Temp</h3>
          <p className="text-base sm:text-lg md:text-xl font-bold">
            {kelvinToCelsius(weatherData.main.temp_min)}°C
          </p>
        </div>
        <div className="bg-red-50 p-3 sm:p-4 rounded-lg">
          <h3 className="text-xs sm:text-sm text-gray-500 font-medium">Max Temp</h3>
          <p className="text-base sm:text-lg md:text-xl font-bold">
            {kelvinToCelsius(weatherData.main.temp_max)}°C
          </p>
        </div>
        <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg">
          <h3 className="text-xs sm:text-sm text-gray-500 font-medium">Sunrise</h3>
          <p className="text-base sm:text-lg md:text-xl font-bold">
            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
          </p>
        </div>
        <div className="bg-purple-50 p-3 sm:p-4 rounded-lg">
          <h3 className="text-xs sm:text-sm text-gray-500 font-medium">Sunset</h3>
          <p className="text-base sm:text-lg md:text-xl font-bold">
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
