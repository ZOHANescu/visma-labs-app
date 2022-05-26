import {useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import {Icon} from "@mui/material";
import {EmployeeForm} from "./Pages/EmployeeForm/EmployeeForm";
import {useEmployeeForm} from "./Pages/EmployeeForm/useEmployeeForm";
import { Routes, Route } from 'react-router-dom';

function App() {
  //const [count, setCount] = useState(0)
  return (
    <div>
        <Routes>
            <Route path="/" element={
                <h1>
                    Welcome
                </h1>
            }/>
            <Route path="/employee" element={<EmployeeForm {...useEmployeeForm()} />}/>
        </Routes>
    </div>
  )
}

export default App
