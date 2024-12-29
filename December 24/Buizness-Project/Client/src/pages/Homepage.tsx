import React from "react";
import { Link } from "react-router-dom";

const Homepage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white">
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen px-6">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-extrabold text-orange-500">
            Welcome to Business Finder
          </h1>
          <p className="text-lg text-gray-200">
            Discover and interact with businesses from all around. Save your
            favorites, leave reviews, and subscribe for notifications.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/signup"
              className="px-6 py-3 text-lg font-semibold bg-orange-500 rounded-lg hover:bg-orange-600 transition-all duration-300"
            >
              Get started
            </Link>
            <Link
              to="/businesses"
              className="px-6 py-3 text-lg font-semibold bg-gray-700 rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              For you
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-800">
        <div className="text-center text-white space-y-8">
          <h2 className="text-4xl font-extrabold">
            Why Choose Business Finder?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-xl font-semibold">Discover Businesses</h3>
              <p className="text-gray-300">
                Browse through a variety of businesses based on your preferences
                and interests.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-xl font-semibold">Save & Review</h3>
              <p className="text-gray-300">
                Save your favorite businesses and leave reviews to help others
                make informed decisions.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-xl font-semibold">Stay Updated</h3>
              <p className="text-gray-300">
                Subscribe to your favorite businesses to receive notifications
                about updates or changes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
