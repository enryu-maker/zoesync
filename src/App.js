import React from "react"
import Home from "./Screens/Home"
import Room from "./Screens/Room"
import BedInfo from "./Screens/BedInfo"
import { Route, Routes } from "react-router-dom"
export default function App() {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>

    {/* After Auth */}
    <Route path="/room" element={<Room/>}/>
    <Route path="/info" element={<BedInfo/>}/>
   </Routes>
  )
}