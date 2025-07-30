import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import style
import "./styles/style.css";
import { getInitialData } from "./utils";
import NoteApp from "./components/NoteApp";


const root = createRoot(document.getElementById("root"));
root.render(<NoteApp />);
