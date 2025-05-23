# Weather Dashboard

![Weather Dashboard](https://img.shields.io/badge/Status-In_Development-blue)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?logo=vite)
![Express](https://img.shields.io/badge/Express-4.18.2-000000?logo=express)

A modern, responsive full-stack weather application with a React frontend and Express backend that provides real-time weather data from various sources in an intuitive interface.

## 📋 Project Overview

Weather Dashboard is a comprehensive web application designed to provide users with accurate, real-time weather information from around the world. The application features a clean, responsive UI built with React and Tailwind CSS, while the backend serves as a proxy for weather data providers, ensuring secure API key management and cross-origin resource sharing.

## 🏗️ Architecture

This project follows a modern client-server architecture:

```
weather-dashboard/
├── frontend/              # React frontend application (Vite)
│   ├── src/               # Source code
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Application pages/routes
│   │   └── ...            # Other frontend source files
│   ├── public/            # Static assets
│   └── ...                # Configuration files
│
└── backend/               # Express backend server
    ├── server.js          # Main server entry point
    └── ...                # Server configuration files
```

## 🚀 Key Features

- **Real-time Weather Data**: Current temperature, weather conditions, humidity, wind speed, pressure, visibility and more
- **Geolocation Support**: Automatic detection of user's current location
- **Global Coverage**: Weather information for thousands of cities worldwide
- **Responsive Design**: Optimized UX across all devices - mobile, tablet, and desktop
- **API Integration**: Backend proxy for secure interactions with multiple weather data providers
- **Error Handling**: Comprehensive error handling and user-friendly error messages

## 💻 Technology Stack

### Frontend
- **React 19**: UI library for building the user interface
- **React Router 6**: Client-side routing
- **Vite 6**: Build tool and dev server
- **Tailwind CSS 4**: Utility-first CSS framework
- **Axios**: Promise-based HTTP client

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **Axios**: HTTP client for API requests
- **CORS**: Cross-Origin Resource Sharing middleware

## 🔧 Getting Started

### Prerequisites
- Node.js (v16.x or higher)
- npm (v8.x or higher) or yarn (v1.22.x or higher)
- API keys from [OpenWeatherMap](https://openweathermap.org/api) and [WeatherAPI](https://www.weatherapi.com/)

### Installation and Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/NabarupDev/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   ```
   Edit the `.env` file and add your API keys:
   ```
   OPENWEATHERMAP_API_KEY=your_api_key_here
   WEATHER_API_KEY=your_api_key_here
   PORT=5000
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   cp .env.example .env
   ```
   Edit the `.env` file:
   ```
   VITE_API_URL=http://localhost:5000/api/weather
   ```

4. **Start the Development Environment**
   
   In one terminal (backend):
   ```bash
   cd backend
   npm run dev
   ```
   
   In another terminal (frontend):
   ```bash
   cd frontend
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 🌐 API Endpoints

### Backend API

- `GET /api/weather?city={cityName}` - Get weather data by city name
- `GET /current?lat={latitude}&lon={longitude}` - Get weather by coordinates
- `GET /` - API status check

## 📦 Production Deployment

### Build Frontend
```bash
cd frontend
npm run build
```
The build artifacts will be stored in the `frontend/dist` directory.

### Deploy Backend
The backend is ready for deployment to platforms like Heroku, Vercel, or any Node.js hosting service.

## 📝 Development Guidelines

- Follow consistent code formatting using ESLint
- Write meaningful commit messages
- Create feature branches and submit pull requests for review
- Document new features and API endpoints

## ✅ Performance Optimizations

- Frontend build optimizations (minification, console removal)
- API response caching for frequently requested locations
- Optimized bundle sizes with lazy loading

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Additional Resources

- [Frontend Documentation](frontend/README.md)
- [Backend Documentation](backend/README.md)
- [OpenWeatherMap API Documentation](https://openweathermap.org/api)
- [WeatherAPI Documentation](https://www.weatherapi.com/docs/)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Created with ❤️ by Nabarup Roy
