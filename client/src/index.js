import React from "react";
import App from "./components/App";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);

/*  
    ALT + I/J/K/L: Move cursor up/left/down/right
    ALT + SHIFT + I/J/K/L: Mark lines/characters while moving character up/left/down/right
    ALT + CTRL + J/L: Move cursor to start/end of word
    SHIFT + CTRL + I/K: Move marked- or current line up/down
    CTRL + J/L: Move cursor to start/end of line
    ALT + SHIFT + O: Mark characters from cursor to end of line
    ALT + SHIFT + U: Mark characters from cursor to start of line
    CTRL + I/K: Add cursor on line above/below the current cursor position
*/
