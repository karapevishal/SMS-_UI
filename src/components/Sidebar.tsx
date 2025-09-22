import { Home, LayoutDashboard, Phone } from "lucide-react"; // icons
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { 
      name: "Home", 
      path: "/dashboard/home", 
      icon: <Home size={18} /> 
    },
    {
      name: "Society Details",
      path: "/dashboard",
      icon: <LayoutDashboard size={18} />,
    },
    {
      name: "Contact Details",
      path: "/dashboard/contact",
      icon: <Phone size={18} />,
    },
  ];

  return (
    <aside className="w-64 h-full bg-gradient-to-b from-pink-200 via-purple-200 to-blue-200 shadow-2xl border-r border-gray-300">
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-gray-800 tracking-wide">
          Yashraj Complex
        </h2>
      </div>

      <ul className="space-y-2 px-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`
                  flex items-center gap-3 p-3 rounded-lg font-medium transition-all duration-200
                  ${
                    isActive
                      ? "bg-sky-500 text-white shadow-md"
                      : "text-gray-700 hover:bg-sky-100 hover:text-sky-600"
                  }
                `}
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
