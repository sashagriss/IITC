import LOGO from "../../assets/poratopia logo.png";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white flex flex-col items-center">
      <header className="w-full text-center py-6">
        <img
          src={LOGO}
          alt="Poratopia Logo"
          className="w-36 h-auto mx-auto drop-shadow-md"
        />
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mt-4">
          Learn More About Poratopia
        </h1>
      </header>

      <section className="text-center max-w-3xl px-6 mt-8">
        <p className="text-lg leading-relaxed">
          Poratopia is more than just a platform; it's a hub for businesses and
          customers to create, grow, and thrive together. Our mission is to
          foster meaningful connections and provide the tools you need for
          success.
        </p>
        <p className="mt-4 text-md text-gray-400">
          Whether you're an entrepreneur looking to expand your audience or a
          customer searching for the best services, Poratopia has you covered.
        </p>
      </section>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold text-orange-500 mb-4">
            Business Directory
          </h3>
          <p className="text-gray-300">
            Access an extensive directory of businesses tailored to your needs.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold text-orange-500 mb-4">
            User Reviews
          </h3>
          <p className="text-gray-300">
            Explore authentic reviews and ratings from real users.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold text-orange-500 mb-4">
            Custom Tools
          </h3>
          <p className="text-gray-300">
            Use our unique tools to showcase and manage your business
            effortlessly.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold text-orange-500 mb-4">
            Networking Opportunities
          </h3>
          <p className="text-gray-300">
            Connect with industry leaders and customers alike.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold text-orange-500 mb-4">
            Real-Time Analytics
          </h3>
          <p className="text-gray-300">
            Monitor your performance and optimize your growth strategy.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold text-orange-500 mb-4">
            Community Support
          </h3>
          <p className="text-gray-300">
            Join a thriving community ready to support and inspire you.
          </p>
        </div>
      </section>

      <footer className="w-full text-center mt-16 py-6 bg-gray-900">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Poratopia. All rights reserved.
        </p>
        <p className="text-xs mt-1 text-gray-500">
          Designed for innovators, creators, and trailblazers.
        </p>
      </footer>
    </div>
  );
};

export default AboutUs;
