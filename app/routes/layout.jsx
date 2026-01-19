import { Outlet, redirect } from "react-router";
import Sidebar from "./sidebar";
import Header from "./header";
import { useState } from "react";

export async function loader({ request }) {
  const cookie = request.headers.get("cookie") || "";
  const isAuthenticated = cookie.includes("auth=true");

  if (!isAuthenticated) {
    throw redirect("/login");
  }

  return null;
}

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false)
  return <main className="flex min-h-screen">
    <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
    <div className="w-full">
      <Header  collapsed={collapsed} setCollapsed={setCollapsed}/>
      <main className="p-4 overflow-auto h-[calc(100dvh-47px)]">
        <Outlet />
      </main>
    </div>
  </main>
}
