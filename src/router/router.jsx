import { createBrowserRouter } from "react-router-dom";
import Index from "../components/Index";
import LayoutHome from "../layouts/LayoutHome";
import Author from "../pages/Author";
import MangaDetails from "../components/MangaDetails";
import Chapters from "../components/Chapters";
import Mangas from "../components/Mangas";


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
    element: <Author />,
  },
  {
    path: "/manga/:id",
    element: <MangaDetails />,
  },
  {
    path: "/chapters/:id",
    element: <Chapters />,
  }
    path: "/mangas/:page",
    element: <Mangas />,
  },
]);

export default router;
