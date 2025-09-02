import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "app/MainLayout";
import Home from "app/Home";
import UserAdd from "app/UserAdd";
import UserDetail from "app/UserDetail";
import UserEdit from "app/UserEdit";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="users/add" element={<UserAdd />} />
          <Route path="users/:id" element={<UserDetail />} />
          <Route path="users/:id/edit" element={<UserEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
