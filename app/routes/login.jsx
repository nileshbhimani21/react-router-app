import { useDispatch } from "react-redux";
import { loginSuccess } from "../context/authSlice";
import { redirect, useNavigate } from "react-router";

export async function loader({ request }) {
  const cookie = request.headers.get("cookie") || "";
  const isAuthenticated = cookie.includes("auth=true");

  if (isAuthenticated) {
    throw redirect("/");
  }

  return null;
}


export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    document.cookie = "auth=true; path=/";
    dispatch(loginSuccess({ name: "Nilesh" }));
    navigate("/");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button className="bg-purple-500 text-white px-3 py-1" onClick={handleLogin}>Login</button>
    </div>
  );
}
