import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact";
import HeroSection from "./pages/HeroSection";
import MainElement from "./layouts/MainElement";

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainElement />,
      children: [
        {
          path: "/",
          element: <HeroSection />
        },
        {
          path: "contact",
          element: <Contact />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={appRouter} />
  )
}

export default App;
