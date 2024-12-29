import { useQuery } from "@tanstack/react-query";
import { getUserBussiness, getUserById } from "../services/userService.tsx";
import { getAuthTokenFromCookie } from "@/lib/auth.tsx";

export const useUserProfile = () => {
  const token = getAuthTokenFromCookie();

  if (!token) {
    return { data: null, error: "No token found", isLoading: false };
  }

  return useQuery({
    queryKey: ["userProfile", token],
    queryFn: () => getUserById(token),
    enabled: !!token,
  });
};

export const useUserBizs = () => {
  const token = getAuthTokenFromCookie();

  if (!token) {
    return { data: null, error: "No token found", isLoading: false };
  }

  return useQuery({
    queryKey: ["userBizs", token],
    queryFn: () => getUserBussiness(token),
    enabled: !!token,
  });
};
