import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Pages/Root";
import HomePage from "./Pages/Home";
import DepartmentsPage from "./Pages/Departments";
import ErrorPage from "./Pages/Error";
import SignupPage, { action as formAction } from "./Pages/Signup";

const router = createBrowserRouter([
  { path: '/', element: <RootLayout /> , errorElement: <ErrorPage />, children: [
    { index: true, element: <HomePage />},
    { path: 'departments', element: <DepartmentsPage />},
    { path: 'signup', element: <SignupPage />, action: formAction}
  ]}
])

export default function App() {
  return <RouterProvider router={router} />;
}
