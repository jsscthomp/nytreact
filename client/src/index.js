// include react dom to launch
import React from 'react';
import ReactDOM from "react-dom";
// get routes from app.js
import App from "./App";
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
