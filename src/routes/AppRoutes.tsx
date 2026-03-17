import { BrowserRouter, Routes, Route } from "react-router-dom"

import PageLogin from "../pages/login/Login"
import { Dashboard } from "../pages/dashbord-de-vistorias/dashbord"
import { RegisterUser } from "../pages/Link/generateLink"
import { ChangePassword } from "../pages/redefinirSenha/ChangePassword"
import { UserSettings } from "../pages/configUser/config"

import ProtectedRoute from "./ProtectedRoute"
import { DashboardClientes } from "../pages/dashbord-de-clientes/dashbordClientes"
import Vistoria  from "../pages/vistoria/Vistoria"
import { atulizarTheme } from "../util/themeLocalStorage"

export default function AppRoutes({user}: any) {
 atulizarTheme()
  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<PageLogin />} />

        <Route 
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard/>
            </ProtectedRoute>
          }
        />

        <Route 
          path="/UserSettings"
          element={
            <ProtectedRoute user={user}>
              <UserSettings/>
            </ProtectedRoute>
          }
        />

        <Route 
          path="/RegisterUser"
          element={
            <ProtectedRoute user={user}>
              <RegisterUser/>
            </ProtectedRoute>
          }
        />

        <Route 
          path="/ChangePassword"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword/>
            </ProtectedRoute>
          }
        />
        <Route 
          path="/Clientes"
          element={
            <ProtectedRoute user={user}>
              <DashboardClientes/>
            </ProtectedRoute>
          }
        />
         <Route 
          path="/Vistoria"
          element={
            <ProtectedRoute user={user}>
              <Vistoria/>
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  )
}