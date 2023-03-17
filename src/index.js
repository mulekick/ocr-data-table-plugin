/* eslint-disable function-paren-newline */

// import modules
import React from "react";
// eslint-disable-next-line node/file-extension-in-import
import {createRoot} from "react-dom/client";

// import components
import App from "./App.js";

createRoot(document.getElementById(`root`))
    .render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );