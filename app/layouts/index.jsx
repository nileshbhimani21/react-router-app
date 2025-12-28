import { Outlet } from "react-router";
import { ThemeProvider } from "../context/ThemeContext";
import store from "../redux/store";
import { Provider } from "react-redux";
import Header from "./header";

export default function RootLayout() {
  
  return (
    <ThemeProvider>
      <Provider store={store}>

        <div className="min-h-screen">
         <Header/>
          <main className="p-6">
            <Outlet />
          </main>
        </div>
      </Provider>
    </ThemeProvider>
  );
}
