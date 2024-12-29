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
  Home,
  User,
  ShieldHalf,
  User2,
  ChevronUp,
  LogIn,
  UserPlus,
  Plus,
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
    title: "Profile",
    url: "/profile",
    icon: User,
  },
  {
    title: "Create business",
    url: "/createbusiness",
    icon: Plus,
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

function AppSidebar() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/login");
  };

  // Example userLogged state (for now, always show "User Logged In" behavior)
  const userLogged = { isLogged: false }; // Replace this with actual state

  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className=" text-center text-[var(--bg-header)] bg-[var(--button-bg)] rounded-xl ">
          Buisnance
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
                      className="cursor-pointer flex items-center space-x-2  p-2 rounded-lg"
                      onClick={() => navigate(link.url)}
                    >
                      <link.icon className="w-5 h-5 " />
                      <span className="text-lg text-center">{link.title}</span>
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
            {userLogged.isLogged ? (
              <DropdownMenu>
                {/* UserLogged */}
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2 />
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width] p-2 rounded-xl bg-[var(--dropdown-bg)]"
                >
                  <DropdownMenuItem className="dropdown-bg-hover p-2 pl-4 rounded-xl cursor-pointer">
                    <span onClick={() => navigate("/profile")}>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="dropdown-bg-hover p-2 pl-4 rounded-xl cursor-pointer">
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="dropdown-bg-hover p-2 pl-4 rounded-xl cursor-pointer"
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
}

export default AppSidebar;
