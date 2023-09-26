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
import MyMangas from "../pages/MyMangas";
import { element } from "prop-types";
import Login from "../pages/Login";
import MangaForm from "../pages/MangaForm";
import Register from "../components/Register";
import Alert from "../components/Alert";
import ChapterForm from "../components/ChapterForm";
import NotAllow from "../components/NotAllow";
import authorsReducer from "../redux/reducers/me_authorsReducer";
import ListComments from "../components/ListComment";
import Comments from "../components/Comment";
import Comment from "../components/Comment";
import EditChapter from "../components/EditChapter";
import Donation from "../components/Donation";
import { AdminPanel } from "../pages/AdminPanel";

const isLogged = authorsReducer.isLogged;

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
    path: "/mymangas",
    element: <MyMangas />,
  },
  { 
    path: "/login",
    element: <Login />,
  },
  {
    path: "/manga-form",
    element: <LayoutProfileMe />,
    children: [
      {
        path: "/manga-form",
        element: <MangaForm />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/Alert",
    element: <Alert />,
  },
  {
    path: "/:id/chapter-form",
    element: isLogged ? <ChapterForm /> : <NotAllow />,
  },
  {
    path: "/Comment/:id",
    element: <Comments />,
  },
  {
    path: "/listComment",
    element: <ListComments />,
  },
  {
    path: '/comment',
    element: <Comment />
  },
    path: "/edit/:manga_id",
    element:  <EditChapter/>,
  },
  {
    path: "/payment/create-order",
    element: <Donation/>
  },
  {
    path: "/admin",
    element: <LayoutProfileMe/> ,
    children:[{
      path: "/admin",
      element:<AdminPanel/>
    }]
  }
]);

export default router;
