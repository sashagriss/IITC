import { useQuery } from "@tanstack/react-query";
import { fetchAllBusinesses } from "../services/businessService.tsx";

export function usebusinesses() {
  return useQuery({
    queryKey: ["businesses"],
    queryFn: () => fetchAllBusinesses(),
    // retry: 1,
    // gcTime: 5000, // default to 5 minute
    // refetchOnWindowFocus: false, // default to 5 true
  });
}
