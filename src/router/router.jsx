import { createBrowserRouter } from "react-router-dom";
import Index from "../components/Index";
import LayoutHome from "../layouts/LayoutHome";
import Author from "../pages/Author";
import LayoutProfileMe from "../layouts/LayoutProfileMe";
import MangaDetails from "../components/MangaDetails";
import Chapters from "../components/Chapters";
import Mangas from "../components/Mangas";
import Page from "../pages/page";
import Chapter from "../components/Chapter";
import Register from "../components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutHome />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
    ],
  },
  {
    path: "/author",
    element: <LayoutProfileMe />,
    children: [
      {
        path: "/author/me",
        element: <Author />,
      },
    ],
  },

  {
    path: "/manga/:id",
    element: <MangaDetails />,
  },
  {
    path: "/chapters/:id",
    element: <Chapters />,
  },
  {
    path: "/mangas/:page",
    element: <Mangas />,
  },
  {
    path: "/mangas",
    element: <Mangas />,
  },
  {
    path: "/chapter",
    element: <Chapter />,
  },
  {
    path: "/chapter/:id/:page",
    element: <Page />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
