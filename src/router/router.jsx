import { createBrowserRouter } from "react-router-dom";
import Index from "../components/Index";
import LayoutHome from "../layouts/LayoutHome";
import Author from "../pages/Author";
import LayoutProfileMe from "../layouts/LayoutProfileMe";
import MangaDetails from "../components/MangaDetails";
import Chapters from "../components/Chapters";
import Mangas from "../components/Mangas";
import Page from "../pages/Page";
import MyMangas from "../pages/MyMangas";
import Login from "../pages/Login";
import MangaForm from "../pages/MangaForm";
import Register from "../components/Register";
import Alert from "../components/Alert";
import ChapterForm from "../components/ChapterForm";
import NotAllow from "../components/NotAllow";
import Donations from "../components/Donations";
import { element } from "prop-types";
import DonationOk from "../components/DonationOk";
import authorsReducer from "../redux/reducers/me_authorsReducer";
import ListComments from "../components/ListComment";
import EditChapter from "../components/EditChapter";
import { AdminPanel } from "../pages/AdminPanel";
import UploadTest from "../components/pruebas/UploadTest";


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
    path: "/chapterPage/:id/:page",
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
    path: "/chapter-form/:id",
    element:  <ChapterForm /> 
  },
  {
    path: "/edit/:manga_id",
    element:  <EditChapter/>,
  },
  {
    path: "/donations",
    element: <Donations/>,
  },
  {
    path: "/donationOk",
    element: <DonationOk/>,
  },
  {
    path: "/listComment",
    element: <ListComments />,
  },
  {
    path: "/admin",
    element: <LayoutProfileMe/> ,
    children:[{
      path: "/admin",
      element:<AdminPanel/>
    }]
  },
  {path: "/test",
element: <UploadTest/>}
]);

export default router;
