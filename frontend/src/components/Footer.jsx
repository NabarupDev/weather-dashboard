import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-10 py-6">
      <div className="w-full flex justify-center px-4">
        <div className="w-full lg:w-[70%] md:w-[85%] sm:w-[95%]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 text-sm">
                &copy; {currentYear} Weather Dashboard. All rights reserved.
              </p>
            </div>
            
            <div className="flex gap-4 text-sm">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition">About</Link>
              <a 
                href="https://github.com/NabarupDev/weather-dashboard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
