import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-9xl font-bold text-blue-600">404</h1>
      <p className="mt-4 text-2xl">
        Oops! The page you are looking for doesn't exist.
      </p>
      <div className="mt-6 flex space-x-4">
        <button
          onClick={handleGoBack}
          className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200"
        >
          Go Back
        </button>
        <button
          onClick={handleGoHome}
          className="px-6 py-3 text-white bg-gray-800 hover:bg-gray-900 rounded-lg transition duration-200"
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
