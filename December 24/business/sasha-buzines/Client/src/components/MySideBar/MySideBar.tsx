interface AppSidebarProps {
  isLogIn: boolean;
  setIsLogIn: React.Dispatch<React.SetStateAction<boolean>>;
}

import { deleteAuthTokenCookie } from "@/lib/auth";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Icons
import {
  Plus,
  Home,
  User,
  ShieldHalf,
  User2,
  ChevronUp,
  LogIn,
  UserPlus,
  Bell,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenu,
} from "@radix-ui/react-dropdown-menu";

const navList = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Businesses",
    url: "/businesses",
    icon: ShieldHalf,
  },
  {
    title: "Add Biz",
    url: "/addbiz",
    icon: Plus,
  },
  {
    title: "Profile",
    url: "/userprofile",
    icon: User,
  },
  {
    title: "Notifications",
    url: "/notifications",
    icon: Bell,
  },
  {
    title: "Favorite",
    url: "/favoritebusinesses",
    icon: Star,
  },
];

const navUser = [
  {
    title: "Login",
    url: "/login",
    icon: LogIn,
  },
  {
    title: "Sign Up",
    url: "/signup",
    icon: UserPlus,
  },
];

const AppSidebar: React.FC<AppSidebarProps> = ({ isLogIn, setIsLogIn }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    deleteAuthTokenCookie();
    setIsLogIn(false);
    navigate("/");
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="text-4xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 tracking-wide uppercase">
          Businance
        </h1>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navList.map((link) => (
                <SidebarMenuItem key={link.title}>
                  <SidebarMenuButton asChild>
                    <a
                      className="cursor-pointer flex items-center space-x-2 p-2 rounded-lg"
                      onClick={() => navigate(link.url)}
                    >
                      <link.icon className="w-5 h-5" />
                      <span className="text-lg">{link.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            {isLogIn ? (
              <DropdownMenu>
                {/* UserLogged */}
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center w-full">
                    <User2 />
                    <ChevronUp className="ml-auto" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width] p-2 rounded-xl bg-gray-800"
                >
                  <DropdownMenuItem className="p-2 pl-4 rounded-xl cursor-pointer hover:bg-gray-700">
                    <span onClick={() => navigate("/userprofile")}>
                      Account
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="p-2 pl-4 rounded-xl cursor-pointer hover:bg-gray-700"
                    onClick={handleSignOut}
                  >
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <SidebarMenu>
                {navUser.map((link) => (
                  <SidebarMenuItem key={link.title}>
                    <SidebarMenuButton asChild>
                      <a
                        className="cursor-pointer flex items-center space-x-2 p-2 rounded-lg"
                        onClick={() => navigate(link.url)}
                      >
                        <link.icon className="w-5 h-5" />
                        <span>{link.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
