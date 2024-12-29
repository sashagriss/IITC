import React, { useEffect } from "react";
import BusinessList from "@/components/BusinessList/BusinessList";
import { useUserProfile } from "../../hooks/useUsere";
import { useNavigate } from "react-router-dom";

const Favorites: React.FC = ({ isLogIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (!isLogIn) {
        navigate("/login");
      }
    }, 3000);
  }, []);

  const { data, error, isLoading } = useUserProfile();
  const businesses = data?.savedBusinesses || [];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <p className="text-lg text-orange-500">Loading your favorites...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <p className="text-lg text-red-500">
          Something went wrong: {error.message || "Unable to load data"}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white py-8">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">My Favorites</h1>
      {businesses.length > 0 ? (
        <BusinessList businesses={businesses} isFav={true} isLogIn={isLogIn} />
      ) : (
        <p className="text-lg text-gray-400">No favorite businesses yet.</p>
      )}
    </div>
  );
};

export default Favorites;
