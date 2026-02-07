import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //   { path: "features", element: <Feature /> },
    //   { path: "works", element: <Works /> },
    //   { path: "testimonial", element: <Testimonial /> },
    //   { path: "pricing", element: <Pricing /> },
    //   { path: "faqs", element: <Faqs /> },
    // ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
