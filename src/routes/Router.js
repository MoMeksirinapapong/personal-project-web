import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectionRoute from "../features/auth/ProtectedRoute";
import RedirectIfAuthenticate from "../features/auth/RedirectifAuthenticate";
import LoginPage from "../pages/LoginPage";
import TargetPage from "../pages/targetPage";
import AboutPage from "../pages/aboutPage";
import RegisterPage from "../pages/registerPage";
import ProfilePage from "../pages/profilePage";
import HomePage from "../pages/homePage";
import AuthLayout from "../layouts/AuthLayout";
import MobileLayout from "../layouts/MobileLayout";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      // <RedirectIfAuthenticate>

      <LoginPage />
    ),
    // </RedirectIfAuthenticate>
  },
  {
    element: (
      // <ProtectionRoute>
      <MobileLayout />
      // </ProtectionRoute>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      // -------------- must move
      {
        path: "/login",
        element: <LoginPage />,
      },

      {
        path: "/target",
        element: <TargetPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },

      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
