import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";

//import components
import SignUp from "./pages/Sign-up/SignUp.tsx";
import LogIn from "./pages/Log-in/LogIn.tsx";
import HomePage from "./pages/Home/HomePage.tsx";
import Article from "./pages/Article/Article.tsx";
import Businesses from "./pages/Businesses/Businesses.tsx";
import UserProfile from "./pages/UserProfile/UserProfile.tsx";
import AddBiz from "./pages/addbiz/addbiz.tsx";
import EditBiz from "./pages/EditBiz/EditBiz.tsx";
import ErrorPage from "./pages/ErorPage/ErorPage.tsx";
import AboutUs from "./pages/aboutus/aboutus.tsx";
import Notifications from "./pages/Notifications/Notifications.tsx";
import Favorites from "./pages/Favorites/Favorites.tsx";
import BuisnessDetails from "./pages/BuisnessDetails/BuisnessDetails.tsx";
import { deleteAuthTokenCookie, getAuthTokenFromCookie } from "./lib/auth.tsx";
import { authenticateUser } from "./services/userService.tsx";

function App() {
  const [isLogIn, setIsLogIn] = useState<boolean>(false);
  const checkAuth = async () => {
    try {
      const token = getAuthTokenFromCookie();

      if (token) {
        const isAuthenticated = await authenticateUser(token);
        console.log(isAuthenticated);

        if (isAuthenticated) {
          setIsLogIn(true);
        }
      }
    } catch (error) {
      console.error("Authentication check failed:", error);
      deleteAuthTokenCookie();
    }
  };

  useEffect(() => {
    if (!isLogIn) {
      checkAuth();
    }
  }, [isLogIn]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Article isLogIn={isLogIn} setIsLogIn={setIsLogIn} />,
      children: [
        { path: "/", element: <HomePage isLogIn={isLogIn} /> },
        { path: "/businesses", element: <Businesses isLogIn={isLogIn} /> },
        { path: "/addbiz", element: <AddBiz isLogIn={isLogIn} /> },
        {
          path: "/userprofile",
          element: <UserProfile isLogIn={isLogIn} />,
        },
        {
          path: "/notifications",
          element: <Notifications isLogIn={isLogIn} />,
        },
        {
          path: "/buisnessdetails/:id",
          element: <BuisnessDetails />,
        },
        {
          path: "/editBusiness/:id",
          element: <EditBiz isLogIn={isLogIn} />,
        },
        {
          path: "/favoritebusinesses",
          element: <Favorites isLogIn={isLogIn} />,
        },
        {
          path: "/login",
          element: <LogIn isLogIn={isLogIn} setIsLogIn={setIsLogIn} />,
        },
        {
          path: "/signup",
          element: <SignUp isLogIn={isLogIn} setIsLogIn={setIsLogIn} />,
        },
        {
          path: "/aboutus",
          element: <AboutUs />,
        },
        {
          path: "/errorpage",
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
