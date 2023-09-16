import "./index.css";
import ReactDOM from "react-dom/client";
import router from "./router/router.jsx";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(

  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>

);
