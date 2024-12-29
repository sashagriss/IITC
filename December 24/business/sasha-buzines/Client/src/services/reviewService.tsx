import { getAuthTokenFromCookie } from "@/lib/auth";
import api from "./API";

export async function addCommentApi(businessId: string, comment: string) {
  try {
    const token = getAuthTokenFromCookie();

    if (!token) {
      throw new Error("Token not found. User is not authenticated.");
    }
    console.log(businessId);
    console.log(token);
    console.log(comment);

    const response = await api.post(
      `/businesses/${businessId}/review`,
      { comment },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error subscribing to business:", error);
    throw error;
  }
}

export async function editCommentApi(
  businessId: string,
  reviewId: string,
  updatedComment: string
) {
  try {
    const token = getAuthTokenFromCookie();
    console.log(businessId);
    console.log(reviewId);
    console.log(updatedComment);

    if (!token) {
      throw new Error("Token not found. User is not authenticated.");
    }
    console.log(businessId);
    console.log(reviewId);
    console.log(updatedComment);

    const response = await api.put(
      `/businesses/${businessId}/review/${reviewId}`,
      { comment: updatedComment },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error editing the comment:", error);
    throw error;
  }
}

export async function deleteCommentApi(commentId: string, businessId: string) {
  try {
    const token = getAuthTokenFromCookie();

    if (!token) {
      throw new Error("Token not found. User is not authenticated.");
    }

    const response = await api.delete(
      `/businesses/${businessId}/review/${commentId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error deleting the comment:", error);
    throw error;
  }
}
