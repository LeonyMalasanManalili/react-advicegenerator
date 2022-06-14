import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//importazione della pagina App (elemento da inserire nel html)
import AdviceGenerator from "./App";

//questo è l'index tsx che prende prende la root dell'index.html
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
//infatti qui gli inseriamo i pezzi da incastonare per reallizare la pagina web con Render.
root.render(
  <React.StrictMode>
    {/* questa sarebbe la pagina app.tsx pre-creata di base ma cambiata in = AdviceGenerator  */}
    <AdviceGenerator />
  </React.StrictMode>
);
