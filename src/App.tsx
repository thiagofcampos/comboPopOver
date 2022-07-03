import React from "react";
import "./App.css";
import ActionButton from "./components/ActionButton";
import {
  LinkContent,
  TextContent,
} from "./components/ActionButton/ActionButton.types";

const items = [
  {
    type: "link",
    url: "https://www.google.com.br/",
    text: "Google",
  },
  {
    type: "link",
    url: "https://www.google.com.br/",
    text: "Google",
  },
  {
    type: "link",
    url: "https://www.google.com.br/",
    text: "Google",
  },
  {
    type: "link",
    url: "https://www.google.com.br/",
    text: "Google",
  },
  {
    type: "text",
    value: "Texto aqui",
    callback: () => console.log("text"),
  },
] as (LinkContent | TextContent)[];

function App() {
  return (
    <div className="App">
      <ActionButton list={items} />
      <ActionButton list={items} popoverDirection="right" />
    </div>
  );
}

export default App;
