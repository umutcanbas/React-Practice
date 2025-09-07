import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import AddTodo from "./pages/addTodo.tsx";
import Home from "./pages/home.tsx";
import MainLayout from "./pages/MainLayout.tsx";
import Reports from "./pages/reports.tsx";
import Timer from "./pages/Timer.tsx";
import Profile from "./pages/Profile.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/addTodo" element={<AddTodo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
