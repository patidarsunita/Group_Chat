import logo from "./logo.svg";
import "./App.css";

import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Singup from "./Pages/Singup";
import Ragistration from "./Pages/Ragistration";
import Dashbord from "./component/Dashbord";

const App = () => {
  const[userToken,setUserToken]=useState(null)
  useEffect(()=>{
    const userToken = localStorage.getItem("token")
    setUserToken(userToken);
    },[])
  
  return (
    <Routes>
      <Route path="/" element={userToken ?<Navigate to="/dashbord"/>:<Ragistration/>}/>
      <Route path="/sign" element={userToken?<Navigate to="/dashbord" />:<Singup/>}/>
      <Route path="/dash" element={userToken?<Dashbord />:<Navigate to="/chat"/>} />
      <Route path="/dashbord" element={<Dashbord/>}/>
    
    
    
    </Routes>
  );
};

export default App;
