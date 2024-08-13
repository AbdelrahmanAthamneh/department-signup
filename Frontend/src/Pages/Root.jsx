import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation/Navigation";


export default function RootLayout() {
  return <>
  <Navigation />
  <Outlet />
  </>
}