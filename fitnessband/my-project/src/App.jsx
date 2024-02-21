import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './page/Home'
import Navebar from './component/navebar/Navebar';
import Footer from './component/footer/Footer';
import { Navigate, Routes, Route } from "react-router-dom";
import Workout from './component/programs/workout/Workout';
import Workoutprograms from './component/programs/workoutprograms/Workoutprograms';
import Mealplans from './component/programs/mealplans/Mealplans';
import Fitness from './component/programs/fitness/Fitness';
import Nutrition from './component/programs/nutrition/Nutrition';
import Health from './component/programs/health/Health';

function App() {

  return (
    <>
      <Navebar />
      <Routes>
      <Route path="/*" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={< Home />} />
        <Route path="/Workout" element={<Workout />} />
        <Route path="/Workoutprograms" element={<Workoutprograms />} />
        <Route path='/Mealplans' element={<Mealplans/>}/>
        <Route path='/Fitness' element={<Fitness/>}/>
        <Route path='/Nutrition' element={<Nutrition/>}/>
        <Route path='/Health' element={<Health/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
