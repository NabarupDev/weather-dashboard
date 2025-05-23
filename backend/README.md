# Weather Dashboard Backend API

A robust RESTful API for serving weather data from multiple weather service providers including OpenWeatherMap and WeatherAPI.

## 🚀 Features

- RESTful API architecture
- Multiple weather data providers integration
- Error handling and validation
- CORS enabled for cross-origin requests
- Environment variable configuration

## 📋 Prerequisites

- Node.js (v14+)
- npm or yarn
- API keys from:
  - [OpenWeatherMap](https://openweathermap.org/api)
  - [WeatherAPI.com](https://www.weatherapi.com/)

## ⚙️ Installation

1. Clone the repository
2. Navigate to the backend directory
```bash
cd weather-dashboard/backend
```
3. Install dependencies
```bash
npm install
```
4. Create an `.env` file based on the `.env.example` template
```bash
cp .env.example .env
```
5. Add your API keys to the `.env` file

## 🔧 Configuration

Configure the application by setting the following environment variables in your `.env` file:

- `OPENWEATHERMAP_API_KEY`: Your OpenWeatherMap API key
- `WEATHER_API_KEY`: Your WeatherAPI.com API key
- `PORT`: The port on which the server will run (defaults to 5000)

## 🖥️ Running the Server

```bash
npm start
```

The server will start on the configured port (default: 5000).

## 📡 API Endpoints

### Get Weather by City Name

```
GET /api/weather?city={cityName}
```

**Parameters:**
- `city` (required): Name of the city

**Response:**
- Weather data from OpenWeatherMap
- 400 Error if city parameter is missing
- 404 Error if city not found
- 500 Error if service unavailable

### Get Current Weather by Coordinates

```
GET /current?lat={latitude}&lon={longitude}
```

**Parameters:**
- `lat` (required): Latitude
- `lon` (required): Longitude

**Response:**
- Current weather data from WeatherAPI.com
- 400 Error if coordinates are missing
- 500 Error if service unavailable

### Server Status

```
GET /
```

**Response:**
- Simple text message confirming the API is running

## 🔒 Error Handling

The API includes robust error handling for:
- Missing request parameters
- Invalid request parameters
- External API failures
- Server errors

## 🛠️ Technologies Used

- Express.js - Web server framework
- Axios - HTTP client
- Dotenv - Environment variable management
- CORS - Cross-origin resource sharing

## 📝 License

[MIT](LICENSE)
