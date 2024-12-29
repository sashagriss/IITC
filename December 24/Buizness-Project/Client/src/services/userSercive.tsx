import axios from "axios";
import { SignUpData, User } from "../../src/types/userType";

export const signUp = async (
  data: SignUpData
): Promise<{ user?: User; message: string; error?: string }> => {
  try {
    const response = await axios.post("/api/signup", data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    return response.data; // Assuming server returns a message and the user without a password
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data; // Return server error response (if any)
    }

    // Generic error response
    return { message: "An unknown error occurred", error: error.message };
  }
};

export const getUserById = async (): Promise<{
  user?: User;
  message: string;
  error?: string;
}> => {
  try {
    const response = await axios.get<{ user: User }>("/api/user", {
      withCredentials: true, // Sends cookies for authentication
    });

    return { user: response.data.user, message: "User fetched successfully" };
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data; // Server-provided error
    }

    return { message: "An unknown error occurred", error: error.message }; // General error
  }
};
