import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center py-6 sm:py-10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-2 sm:mb-4">404</h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600 mb-4 sm:mb-6">Page Not Found</h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-6 sm:mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base py-2 px-4 sm:px-6 rounded-md transition"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
