import AppSidebar from "@/components/MySideBar/MySideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { deleteAuthTokenCookie, getAuthTokenFromCookie } from "@/lib/auth";
import { authenticateUser } from "@/services/userService";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function Article({ isLogIn, setIsLogIn }: any) {
  const navigate = useNavigate();

  // const checkAuth = async () => {
  //   try {
  //     const token = getAuthTokenFromCookie();

  //     if (token) {
  //       const isAuthenticated = await authenticateUser(token);
  //       console.log(isAuthenticated);

  //       if (isAuthenticated) {
  //         setIsLogIn(true);
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Authentication check failed:", error);
  //     deleteAuthTokenCookie();
  //   }
  // };

  // useEffect(() => {
  //   if (!isLogIn) {
  //     checkAuth();
  //   }
  // }, [isLogIn]);

  return (
    <div className=" flex items-center justify-center">
      <SidebarProvider>
        <AppSidebar isLogIn={isLogIn} setIsLogIn={setIsLogIn} />
        <div className="flex flex-col  flex-grow h-screen">
          <header className="fixed top-0 bg-white z-50 rounded-br-xl">
            <SidebarTrigger />
          </header>
          <main className="flex-grow h-screen">
            <ToastContainer />
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}

export default Article;
