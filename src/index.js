import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from "./plan-with-love/App"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <App/>
        <ToastContainer/>
    </div>
);
