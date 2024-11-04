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
        // loader: async () => {
        //     try {
        //         const response = await fetch("https://coffee-store-server-one-topaz.vercel.app/coffees");
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok'); // Throw an error if the response is not okay
        //         }
        //         return response.json(); // Return the fetched JSON data
        //     } catch (error) {
        //         console.error('Error fetching coffees:', error); // Log the error for debugging
        //         throw new Response('Error fetching data', { status: 500 }); // Return an error response for the router
        //     }
        // },
        loader: ()=>fetch('https://coffee-store-server-one-topaz.vercel.app/coffees')
    },
    
      {
        path: "/updateCoffee",
        element: <UpdateCoffee />,
      },
      {
        path: "/updateExistingCoffee/:id",
        element: <UpdateExistingCoffee />,
        loader: ({ params }) =>fetch(`https://coffee-store-server-one-topaz.vercel.app/updateExistingCoffee/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
