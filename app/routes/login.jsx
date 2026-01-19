import { useDispatch } from "react-redux";
import { loginSuccess } from "../context/authSlice";
import { redirect, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Input } from "../components/FormField";
import { LogoIcon } from "../components/Icons";
import { emailRegex } from "../utils/regex";

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

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });
  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      document.cookie = "auth=true; path=/";
      dispatch(loginSuccess({ name: "Nilesh" }));
      navigate("/");
    }
  };
  return (
    <div className="flex h-dvh justify-center items-center">
      <div className="p-4 rounded bg-gray-100 w-75">
        <div className="text-center mb-3">
          <LogoIcon className="w-28 h-7 mx-auto" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-3'>
            <Input placeholder="email" {...register("email", { required: true, pattern: emailRegex })} />
            {errors.email && errors.email.type === "required" && <div className="text-sm text-red-500">Email is required</div>}
            {errors.email && errors.email.type === "pattern" && <div className="text-sm text-red-500">Email is not valid</div>}
          </div>
          <div className='mb-3'>
            <Input type="password"  placeholder="Password"  {...register("password", { required: true})} />
            {errors.password && errors.password.type === "required" && <div className="text-sm text-red-500">Password is required</div>}
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
