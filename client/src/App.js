import { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Navbar from "./components/navbar/Navbar";
import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from "./components/rightbar/Rightbar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import { DarkModeContext } from "./contexts/darkModeContext";
import { AuthContext } from "./contexts/authContext";

import "./style.scss";

function App() {
  // Simulates a logged in user.
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);

  const queryClient = new QueryClient();

  // Base layout for the home page.
  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <Navbar />
          <div style={{ display: "flex" }}>
            <Leftbar />
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            <Rightbar />
          </div>
        </div>
      </QueryClientProvider>
    );
  };

  // If there is no logged in user, redirect to the login page.
  // children is everything between <ProtectedRoute></ProtectedRoute>.
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) return <Navigate to="/login" />;
    else return children;
  };

  // Example of client side routing with react router dom.
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      // children holds the paths and elements that will take the place of the Outlet.
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
