import React from "react"
import ReactDOM from "react-dom/client"
import { useEffect, useState } from "react"

import AppRoutes from "./routes/AppRoutes"
import { escutarAuth } from "./util/userLogadoFuntion"

import "./index.css"

function App(){

  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true)

  useEffect(()=>{

    escutarAuth((usuario:any)=>{

      setUser(usuario)
      setLoading(false)

    })

  },[])

  if(loading){
    return <h1>Carregando...</h1>
  }

  return <AppRoutes user={user}/>
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)