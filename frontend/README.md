# Weather Dashboard

![Weather Dashboard](https://img.shields.io/badge/Status-In_Development-blue)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.7-38B2AC?logo=tailwindcss)

A modern, responsive weather application built with React and Vite that provides real-time weather data from around the globe in a clean, intuitive interface.

## Features

- **Real-time Weather Data**: Current conditions including temperature, humidity, wind speed, and more
- **Global Coverage**: Weather information for thousands of cities worldwide
- **Location Detection**: Automatic detection of your current location for instant weather updates
- **Responsive Design**: Perfect experience across all devices - mobile, tablet, or desktop
- **Clean UI**: Intuitive interface designed for ease of use and accessibility

## Getting Started

### Prerequisites

- Node.js (v16.x or higher)
- npm (v8.x or higher) or yarn (v1.22.x or higher)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/NabarupDev/weather-dashboard.git
   cd weather-dashboard/frontend
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env
   ```
   Edit `.env` file and add your API URL:
   ```
   VITE_API_URL=http://localhost:5000/api/weather
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory.

## Project Structure

```
frontend/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/          # Application pages
│   ├── App.jsx         # Main application component
│   ├── App.css         # Application styles
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles (Tailwind imports)
├── .env.example        # Example environment variables
├── .gitignore          # Git ignore file
├── eslint.config.js    # ESLint configuration
├── index.html          # HTML entry point
├── package.json        # Dependencies and scripts
└── vite.config.js      # Vite configuration
```

## Technology Stack

- **React 19**: Frontend library for building user interfaces
- **React Router 6**: Declarative routing for React
- **Vite 6**: Next generation frontend tooling
- **Tailwind CSS 4**: Utility-first CSS framework
- **Axios**: Promise-based HTTP client
- **ESLint**: Static code analysis tool

## Performance Optimizations

The application includes several performance optimizations:
- Production build removes console logs
- Minification with Terser
- Disabled source maps in production builds
- HMR (Hot Module Replacement) during development

## Browser Support

The application is designed to work in all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Guidelines

### Code Style

We follow ESLint recommended practices for JavaScript and React.

### Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Location detection via [ipapi](https://ipapi.co/)
- Icons from [OpenWeatherMap](https://openweathermap.org/)
