export const getAuthTokenFromCookie = () => {
  const cookies = document.cookie.split("; ");

  const tokenCookie = cookies.find((cookie) => cookie.startsWith("token"));
  return tokenCookie ? tokenCookie.split("=")[1] : null;
};

export const deleteAuthTokenCookie = () => {
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
};
