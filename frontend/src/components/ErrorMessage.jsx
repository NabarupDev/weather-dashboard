const ErrorMessage = ({ message }) => {
  if (!message) return null;
  
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 sm:p-4 mt-4 sm:mt-6" role="alert">
      <p className="font-bold text-sm sm:text-base">Error</p>
      <p className="text-xs sm:text-sm md:text-base">{message}</p>
      <p className="text-xs sm:text-sm mt-1 sm:mt-2">
        Note: If you're experiencing location-based errors, try searching by city name instead.
      </p>
    </div>
  );
};

export default ErrorMessage;
