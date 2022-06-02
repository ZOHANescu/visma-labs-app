import {EmployeeListProps} from "./EmployeeList";
import {useEffect, useState} from "react";
import {Employee} from "../EmployeeForm/EmployeeForm.types";

export function useEmployeeList(): EmployeeListProps{

    const [employees, setEmployees] = useState<Employee[]>([]);

    async function fetchData(){
        const newEmployees = await window.fetch("/api/employee/", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json())
            .then(json => json.content);

        setEmployees(newEmployees);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {
        employees
    };
}