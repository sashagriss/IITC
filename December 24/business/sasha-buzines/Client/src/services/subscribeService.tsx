import { getAuthTokenFromCookie } from "@/lib/auth";
import api from "./API";

export async function addSubscribeApi(businessId: string) {
  try {
    const token = getAuthTokenFromCookie();

    if (!token) {
      throw new Error("Token not found. User is not authenticated.");
    }
    console.log(businessId);
    console.log(token);

    const response = await api.post(
      `/businesses/${businessId}/subscribe`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error subscribing to business:", error);
    throw error;
  }
}

export async function removeSubscribeApi(businessId: string) {
  try {
    const token = getAuthTokenFromCookie();

    if (!token) {
      throw new Error("Token not found. User is not authenticated.");
    }
    console.log(businessId);
    console.log(token);

    const response = await api.delete(`/businesses/${businessId}/unsubscribe`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error unsubscribing from business:", error);
    throw error;
  }
}
