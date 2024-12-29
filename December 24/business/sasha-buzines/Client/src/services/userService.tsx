import { getAuthTokenFromCookie } from "@/lib/auth.tsx";
import { User } from "../types/userType.tsx";
import api from "./API.tsx";

export const SignUpApi = async (newUser: User) => {
  try {
    console.log(newUser);

    const response = await api.post("/user/signup", newUser);
    return response.data;
  } catch (error) {
    throw new Error(
      "Error signing up: " +
        (error instanceof Error ? error.message : "Unknown error")
    );
  }
};

export const loginApi = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    console.log(credentials);

    const response = await api.post("/user/login", credentials);
    return response.data;
  } catch (error) {
    throw new Error(
      "Error logging in: " +
        (error instanceof Error ? error.message : "Unknown error")
    );
  }
};

export const authenticateUser = async (token: string) => {
  try {
    const response = await api.get("/user/authenticateUser", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      return response.data.isAuthenticated || false;
    }
    console.error("Authentication failed with status:", response.status);
    return false;
  } catch (error) {
    console.error("Authentication failed:", error);
    return false;
  }
};

export const getUserById = async (token: string) => {
  try {
    const response = await api.get("/user/getUserByToken", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);

    return response.data.user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export const getUserBussiness = async (token: string) => {
  try {
    const response = await api.get("/user/getUserByToken", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data.user);
    console.log(response.data);

    return response.data.ownedBusinesses;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export const updateUserProfile = async (userData: User) => {
  try {
    const token = getAuthTokenFromCookie();
    const response = await api.patch(`/user/${userData._id}`, userData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
};
