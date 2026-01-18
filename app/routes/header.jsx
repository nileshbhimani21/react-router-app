import { Link, useNavigate } from 'react-router';
import { useTheme } from '../context/ThemeContext';
import { logout } from '../context/authSlice';
import { useDispatch } from 'react-redux';
import Switch from '../components/Switch';
import { DarkIcon, LightIcon, MenuIcon, UserIcon } from '../components/Icons';
import DropdownMenu from '../components/DropDown';

export default function Header({ collapsed, setCollapsed }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  function logoutFun() {
    document.cookie = "auth=; Max-Age=0; path=/";
    dispatch(logout());
    navigate("/login");
  }
  return (
    <header className="flex justify-end gap-2 px-4 py-2 border-b border-gray-400">
      <button
        type='button'
        onClick={() =>setCollapsed(!collapsed)}
        className="btn-link block lg:hidden"
      >
        <MenuIcon/>
      </button>
      <button
        type='button'
        onClick={toggleTheme}
        className="btn-link"
      >
        {theme === "light" ? <LightIcon /> : <DarkIcon />}
      </button>
      <DropdownMenu
        trigger={
          <button
        type='button'
        className="btn-link"
      >
        <UserIcon />       
      </button>
           
        }
        align="right"
        items={[
          { label: "Settings", onClick: () => {navigate('/settings') } },
          { label: "Logout", danger: true, onClick: () => {logoutFun()} },
        ]}
      />
    </header>
  )
}
