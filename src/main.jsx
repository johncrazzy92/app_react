import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "../src/redux/store.js"
import ChatBot from "./components/componentesMangas/ChatBot.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(

  <>
    <Provider store={store}>
      <App />
      <ChatBot />
    </Provider>
  </>
);


