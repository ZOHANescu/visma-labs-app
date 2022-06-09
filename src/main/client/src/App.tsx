import {useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import {Icon} from "@mui/material";
import {EmployeeForm} from "./Pages/EmployeeForm/EmployeeForm";
import {useEmployeeForm} from "./Pages/EmployeeForm/useEmployeeForm";
import { Routes, Route } from 'react-router-dom';
import {useEmployeeList} from "./Pages/EmployeeList/useEmployeeList";
import {EmployeeList} from "./Pages/EmployeeList/EmployeeList";

function App() {
  //const [count, setCount] = useState(0)
  return (
    <div>
        <Routes>
            <Route path="/" element={
                <h1>
                    Welcome
                        <a href={"/employee"}>
                            Go to form
                        </a>
                </h1>
            }/>
            <Route path="/employee" element={<EmployeeForm {...useEmployeeForm()} />}/>
            <Route path="/employeeList" element={<EmployeeList {...useEmployeeList()} />}/>
        </Routes>
    </div>
  )
}

export default App
