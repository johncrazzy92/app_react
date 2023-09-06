import { createBrowserRouter } from "react-router-dom";
import Index from "../components/Index";
import LayoutHome from "../layouts/LayoutHome";
import Author from "../pages/Author";
import Chapter from "../components/Chapter";
import Page from "../pages/page";  

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
    path: "/chapter",
    element: <Chapter />,
 },
  {
    path: "/chapter/:id/:page",
    element: <Page />, 
  },
]);

export default router;
