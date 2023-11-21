import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Layout from "./components/layout";
import Dashboard from "./pages/dashboard";
import RegisterNew from "./pages/dashboard/newProducts";
import Private from "./routes/Private";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <Private>
        <Dashboard />
      </Private>
    ),
  },
  {
    path: "/new",
    element: (
      <Private>
        <RegisterNew />
      </Private>
    ),
  },
]);

export default router;
