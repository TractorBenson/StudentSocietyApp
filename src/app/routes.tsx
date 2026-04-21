import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { FestivalsHeritage } from "./pages/FestivalsHeritage";
import { Food } from "./pages/Food";
import { Updates } from "./pages/Updates";
import { Detail } from "./pages/Detail";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Root } from "./pages/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "festivals", element: <FestivalsHeritage /> },
      { path: "heritage", element: <FestivalsHeritage /> },
      { path: "food", element: <Food /> },
      { path: "updates", element: <Updates /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "detail/:id", element: <Detail /> },
    ],
  },
]);