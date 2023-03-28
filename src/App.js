import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";
import AllWords from "./component/AllWords";
function App() {
  return (
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path="/" element={<DayList/>}/>
      <Route path="/day/:day" element={<Day/>}/> 
      <Route path="/create_word" element={<CreateWord/>}/> 
      <Route path="create_day" element={<CreateDay/>}/>
      <Route path="all_words" element={<AllWords/>}/>
      <Route element={<EmptyPage/>}/>
   </Routes>
  </BrowserRouter>
  );
}

export default App;
