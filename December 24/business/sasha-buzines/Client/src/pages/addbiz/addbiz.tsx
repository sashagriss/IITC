import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { addBusinessApi } from "../../services/businessService.tsx";
import BusinessForm from "../../components/FormBiz/FormBiz.tsx";
import { useEffect, useState } from "react";

const AddBiz = ({ isLogIn }: { isLogIn: boolean }) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!isLogIn) {
      const timer = setTimeout(() => {
        navigate("/login");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isLogIn, navigate]);

  const mutation = useMutation({
    mutationFn: (newBusiness: {
      name: string;
      description: string;
      category: string;
    }) => addBusinessApi(newBusiness),
    onSuccess: () => {
      navigate("/businesses");
    },
    onError: (err) => {
      const error =
        err?.response?.data?.message || "An unexpected error occurred.";
      setErrorMessage(error);
    },
  });

  const handleSubmit = (newBusiness: {
    name: string;
    description: string;
    category: string;
  }) => {
    setErrorMessage(null);
    mutation.mutate(newBusiness);
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-gray-800 via-black to-gray-800 py-10 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-orange-500">
            Add Your Business
          </h1>
          <p className="mt-2 text-gray-300 text-lg">
            Share your business details and help us grow your network.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto py-10 px-4">
        <div className="bg-gray-800 rounded-lg shadow-lg p-8">
          {errorMessage && (
            <div className="mb-4 p-4 text-red-500 bg-gray-700 rounded-lg shadow">
              <p className="font-semibold">{errorMessage}</p>
              <p className="mt-2 text-sm text-gray-300">
                Please go to your profile and change your plan.
              </p>
            </div>
          )}

          {mutation.isLoading && (
            <div className="mb-4 p-4 text-yellow-500 bg-gray-700 rounded-lg shadow">
              Adding your business, please wait...
            </div>
          )}

          {/* Business Form */}
          <BusinessForm onSubmit={handleSubmit} />
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-gray-800 via-black to-gray-800 py-6 mt-10">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Your Business Network. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AddBiz;
