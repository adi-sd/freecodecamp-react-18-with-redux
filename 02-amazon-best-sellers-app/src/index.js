import React from "react";
import ReactDOM from "react-dom/client";

import BookList from "./components/book-component";
import "./css/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);