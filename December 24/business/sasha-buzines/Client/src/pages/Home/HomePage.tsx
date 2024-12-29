import { useNavigate } from "react-router-dom";

const Businance = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/businesses");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-black text-white flex flex-col items-center justify-center">
      <header className="w-full text-center py-6">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 mt-4">
          Welcome to Businance
        </h1>
      </header>
      <section className="text-center max-w-4xl px-4 mt-8">
        <p className="text-xl leading-relaxed">
          Step into the future of business networking with **Businance**!
          Empowering entrepreneurs and customers with the tools to discover,
          connect, and thrive in a global marketplace.
        </p>
        <p className="mt-4 text-lg text-gray-400">
          Whether you're launching your dream venture or searching for the best
          services, Businance is your go-to platform for innovation, growth, and
          community.
        </p>
      </section>

      <div className="mt-12">
        <button
          onClick={() => handleNavigate()}
          className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-full shadow-lg transition-all duration-300"
        >
          Explore Businesses
        </button>
        <button
          onClick={() => navigate("/aboutus")}
          className="ml-4 px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-bold rounded-full shadow-lg transition-all duration-300"
        >
          Discover Our Vision
        </button>
      </div>

      <section className="mt-16 w-full px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold text-purple-400 mb-4">Discover</h3>
          <p className="text-gray-300">
            Uncover opportunities, ideas, and solutions tailored to your needs.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold text-purple-400 mb-4">Engage</h3>
          <p className="text-gray-300">
            Join a vibrant network of businesses and customers across the globe.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold text-purple-400 mb-4">Succeed</h3>
          <p className="text-gray-300">
            Achieve your goals with cutting-edge tools and a supportive
            community.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Businance;
