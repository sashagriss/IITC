import { Business } from "../../types/business.tsx";
import { usebusinesses } from "@/hooks/useBusiness.tsx";
import { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import BusinessList from "../../components/BusinessList/BusinessList.tsx";

const Businesses = ({ isLogIn }) => {
  const [textSearch, setTextSearch] = useState<string>("");
  const { data: businesses, error, isLoading } = usebusinesses();
  const [filteredBusinesses, setFilteredBusinesses] = useState<Business[]>([]);
  
  const debouncedSearch = useCallback(
    debounce((searchText: string) => {
      if (!businesses) return;

      const filtered = businesses.filter((business) =>
        business?.name?.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredBusinesses(filtered);
    }, 300),
    [businesses]
  );

  useEffect(() => {
    debouncedSearch(textSearch);
  }, [textSearch, debouncedSearch]);

  if (isLoading) {
    return (
      <h1 className="text-center text-3xl font-bold text-gray-700">
        Loading...
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-center text-3xl font-bold text-red-500">
        Error: {error.message}
      </h1>
    );
  }

  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black  p-10 text-white  min-h-screen">
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search businesses..."
          className="w-full max-w-md bg-gray-700 text-gray-300 text-lg px-5 py-3 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={textSearch}
          onChange={(e) => setTextSearch(e.target.value)}
        />
      </div>

      <BusinessList businesses={filteredBusinesses} isLogIn={isLogIn} />
    </div>
  );
};

export default Businesses;
