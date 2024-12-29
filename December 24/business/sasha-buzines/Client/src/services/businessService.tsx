import api from "./API.tsx";
import { Business } from "../types/business.tsx";
import { getAuthTokenFromCookie } from "../lib/auth.tsx";

export const addBusinessApi = async (business: Business) => {
  try {
    const token = getAuthTokenFromCookie();
    console.log(token);

    // if (!token) {
    //   throw new Error("Token not found. User is not authenticated.");
    // }
    console.log(business);

    const response = await api.post("/businesses/create", business, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);

    return response.data;
  } catch (error) {
    console.error("Error adding business:", error);

    throw error;
  }
};

export const fetchAllBusinesses = async () => {
  try {
    const response = await api.get("/businesses/getallbusinesses");
    console.log(response);

    const data = await response.data.businesses;

    console.log("All Businesses:", data);
    return data;
  } catch (error) {
    console.error("Error fetching businesses:", error.message);
    return null;
  }
};

export const editBusinessApi = async (
  id: string,
  updatedBusiness: Business
) => {
  try {
    const token = getAuthTokenFromCookie();
    console.log(token);

    if (!token) {
      throw new Error("Token not found. User is not authenticated.");
    }
    console.log(updatedBusiness);

    const response = await api.put(
      `/businesses/update/${id}`,
      updatedBusiness,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Business updated successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating business:", error);
    throw error;
  }
};

export const deleteBusinessApi = async (id: string) => {
  try {
    const token = getAuthTokenFromCookie();
    console.log(token);

    if (!token) {
      throw new Error("Token not found. User is not authenticated.");
    }

    const response = await api.delete(`/businesses/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Business deleted successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting business:", error);
    throw error;
  }
};
