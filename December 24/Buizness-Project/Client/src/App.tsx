import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import page components
import Homepage from "./pages/Homepage";
import Businesses from "./pages/Businesses";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProfilePage from "./pages/ProfilePage";
import AppSidebar from "./SideBar/SideBar";
import { SidebarTrigger } from "./components/ui/sidebar";

const App = () => {
  return (
    <Router>
      <AppSidebar />
      <SidebarTrigger />
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/businesses" element={<Businesses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
