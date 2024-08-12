import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const root = ReactDOM.createRoot(document.getElementById("root")); 
document.body.style = "background : black";
root.render(<App/>);
//ReactDOM.render(    paragraph, document.getElementById("root"));