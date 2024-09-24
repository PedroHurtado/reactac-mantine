import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

/*
si el compilador no encuentra en el import dinamico
la cadena './pages/UserList' no va a hacer code splitting
*/

const UserList = React.lazy(()=>import('./pages/UserList'))

export default function MetaRoutes() {
  return (
    <React.Suspense>
        <Routes>
        <Route element={<Layout />} path="/">
            <Route element={<UserList />} path="user"></Route>
        </Route>
        </Routes>
    </React.Suspense>
  );
}
