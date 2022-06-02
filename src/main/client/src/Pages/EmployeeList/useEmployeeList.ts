import {EmployeeListProps} from "./EmployeeList";
import {useEffect, useState} from "react";
import {Employee} from "../EmployeeForm/EmployeeForm.types";

export function useEmployeeList(): EmployeeListProps{

    const [employees, setEmployees] = useState<Employee[]>([]);

    async function fetchData(){

    }

    useEffect(() => {
        fetchData();
    }, []);

    return {
        employees: [
            {
                id: 0,
                firstName: "John",
                lastName: "Doe",
                salary: 1000
            },
            {
                id: 0,
                firstName: "John",
                lastName: "Doe",
                salary: 1000
            },
            {
                id: 0,
                firstName: "John",
                lastName: "Doe",
                salary: 1000
            }
        ]
    };
}