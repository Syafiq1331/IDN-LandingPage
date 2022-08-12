import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Academic, Contact, Event, PMB } from "./routes/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <App />
 </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <BrowserRouter>
  <Routes>
   <Route path="/" element={<App />} />
   <Route path="about" element={<About />} />
   <Route path="academic" element={<Academic />} />
   <Route path="contact-us" element={<Contact />} />
   <Route path="event" element={<Event />} />
   <Route path="pmb" element={<PMB />} />
  </Routes>
 </BrowserRouter>
);
