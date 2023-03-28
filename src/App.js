import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
function App() {
  return (
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path="/" element={<DayList/>}/>
      <Route path="/day/:day" element={<Day/>}/> 
      <Route element={<EmptyPage/>}/>
   </Routes>
  </BrowserRouter>
  );
}

export default App;
