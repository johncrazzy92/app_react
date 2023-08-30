import { createBrowserRouter } from "react-router-dom";
import Index from "../components/Index";
import LayoutHome from "../layouts/LayoutHome";

const router = createBrowserRouter([

    {
        path:"/",
        element: <LayoutHome/>,
        children: [
            {
        path: "/",
        element: <Index />
    }
        ]
    },


]);

export default router
