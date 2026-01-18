import { Link, useLocation } from "react-router";
import { CloseIcon, LogoIcon } from "../components/Icons.jsx";

export default function Sidebar({ collapsed, setCollapsed }) {
    let location = useLocation();
    function NavLink({ to, text }) {
        return <Link onClick={() => setCollapsed(!collapsed)} className={`w-full block px-2 py-1 border-t border-gray-400 ${location.pathname === to ? "text-purple-600" : ""}`} to={to}>{text}</Link>
    }
    return (
        <aside className={`h-dvh overflow-auto min-w-62.5 ${collapsed ? "left-0" : "-left-80 xl:left-0"} absolute xl:static transition z-10`}>
            <div className="p-2 flex justify-between">
                <div className="text-center">
                    <LogoIcon className="w-28 h-7 mx-auto" />
                </div>
                <button
                    type='button'
                    onClick={() => setCollapsed(!collapsed)}
                    className="btn-link block lg:hidden"
                >
                    <CloseIcon />
                </button>
            </div>
            <nav>
                <NavLink text="Dashboard" to="/" />
                <NavLink text="Settings" to="/settings" />
            </nav>
        </aside>
    );
};