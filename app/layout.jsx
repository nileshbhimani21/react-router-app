import { Outlet } from "react-router";
import { ThemeProvider } from "./context/ThemeContext";
import {store} from "./store";
import { Provider } from "react-redux";
import setupAxios from "./setupAxios";
import axios from "axios";

setupAxios(axios, store)

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Outlet />
      </Provider>
    </ThemeProvider>
  );
}
