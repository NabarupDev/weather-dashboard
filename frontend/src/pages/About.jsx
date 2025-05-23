const About = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  return (
    <div className="w-full">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">About Weather Dashboard</h1>
      
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <section className="mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-sm sm:text-base md:text-lg mb-3">
            Weather Dashboard provides accurate, real-time weather information from around the globe
            in a clean, intuitive interface. We believe weather data should be accessible and easy to understand
            for everyone, whether you're planning your day or preparing for travel.
          </p>
          
          <p className="text-sm sm:text-base md:text-lg">
            Launched in 2023, our platform combines powerful meteorological data with a user-friendly
            experience designed for both casual users and weather enthusiasts.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <h3 className="font-medium text-gray-800">Real-time Weather Data</h3>
              <p className="text-gray-600 text-sm">Current conditions including temperature, humidity, wind speed, and more</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <h3 className="font-medium text-gray-800">Global Coverage</h3>
              <p className="text-gray-600 text-sm">Weather information for thousands of cities worldwide</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <h3 className="font-medium text-gray-800">Location Detection</h3>
              <p className="text-gray-600 text-sm">Automatic detection of your current location for instant updates</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <h3 className="font-medium text-gray-800">Responsive Design</h3>
              <p className="text-gray-600 text-sm">Perfect experience on any device - mobile, tablet, or desktop</p>
            </div>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React Router</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Tailwind CSS</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Axios</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Express</span>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">How to Use</h2>
          <ol className="list-decimal ml-5 space-y-2 text-sm sm:text-base">
            <li>Enter any city name in the search bar on the home page</li>
            <li>Click "Get Weather" or press Enter</li>
            <li>View detailed current weather information instantly</li>
            <li>Alternatively, click "Use my current location" for local weather</li>
          </ol>
        </section>
        
        <div className="bg-blue-50 p-4 rounded-lg mt-6 border border-blue-100">
          <h3 className="font-semibold text-blue-800 text-sm sm:text-base md:text-lg">Developer Information</h3>
          <p className="text-blue-700 mt-2 text-xs sm:text-sm md:text-base">
            Our weather data is sourced from a custom API hosted at <code className="bg-blue-100 px-1 rounded">{API_URL}</code>.
            For API queries, use the format: <code className="bg-blue-100 px-1 rounded">{API_URL}?city=CityName</code>
          </p>
          <p className="text-blue-700 mt-2 text-xs sm:text-sm">
            Weather Dashboard is open source. Contributions, feedback, and feature requests are always welcome!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
