import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Components/Root.jsx";
import Home from "./Components/Home.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import UpdateExistingCoffee from "./Components/UpdateExistingCoffee.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://coffee-store-server-omega-orcin.vercel.app/coffees"),
      },
      {
        path: "/updateCoffee",
        element: <UpdateCoffee />,
      },
      {
        path: "/updateExistingCoffee/:id",
        element: <UpdateExistingCoffee />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-omega-orcin.vercel.app/updateExistingCoffee/${params.id}`
          ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
