import {useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import {Icon} from "@mui/material";
import {EmployeeForm} from "./Pages/EmployeeForm/EmployeeForm";
import {useEmployeeForm} from "./Pages/EmployeeForm/useEmployeeForm";

function App() {
  //const [count, setCount] = useState(0)
  return (
    <div>
      <EmployeeForm {...useEmployeeForm()}/>
    </div>
  )
}

export default App
