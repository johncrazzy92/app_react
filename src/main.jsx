import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "../src/redux/store.js"
import { GoogleOAuthProvider } from "@react-oauth/google";


ReactDOM.createRoot(document.getElementById("root")).render(

  <>
    <Provider store={store}>
      <GoogleOAuthProvider clientId="469457803946-1surfoqlkb38l947qodpfsv8dp3gsh15.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </Provider>

  </>
);


