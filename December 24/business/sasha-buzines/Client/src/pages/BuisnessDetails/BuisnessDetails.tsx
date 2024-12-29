import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "@/services/API";

function BusinessDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        const response = await api.get(`/businesses/getbiz/${id}`);
        setBusiness(response.data.businesse);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBusiness();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!business) return <div>Business not found.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white flex flex-col items-center justify-center">
      <header className="w-full text-center py-6">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 animate-pulse">
          {business.name}
        </h1>
        <p className="text-gray-400 text-lg mt-2 italic">{business.category}</p>
      </header>

      <section className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl w-full mt-6">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">
          About the Business
        </h2>
        <p className="text-gray-300 mb-6">{business.description}</p>

        <h3 className="text-xl font-bold text-orange-500 mb-2">
          Owner Details:
        </h3>
        <p className="text-gray-300">Name: {business.owner?.name}</p>
        <p className="text-gray-300">{business.owner?.email}</p>

        <h3 className="text-xl font-bold text-orange-500 mt-6 mb-2">
          Subscribers:
        </h3>
        <p className="text-gray-300">{business.subscribers.length}</p>

        <h3 className="text-xl font-bold text-orange-500 mt-6 mb-2">
          Reviews: <span>{business.reviews.length}</span>
        </h3>
        <ul className="h-40 overflow-y-auto bg-gray-700 p-4 rounded-lg scroll-custom empty:hidden">
          {business.reviews?.map((review) => (
            <li
              key={review._id}
              className="border-b border-gray-600 pb-2 mb-2 last:border-b-0 last:pb-0 empty:display-none"
            >
              <p className="text-gray-300">{review.comment}</p>
              <p className="text-gray-500 text-sm mt-1">
                {new Date(review.createdAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <footer className="w-full text-center mt-12 py-4 bg-gray-900">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Poratopia. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default BusinessDetail;
