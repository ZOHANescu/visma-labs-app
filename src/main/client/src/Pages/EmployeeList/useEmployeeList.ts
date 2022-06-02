import {EmployeeListProps} from "./EmployeeList";
import {useEffect, useState} from "react";
import {Employee} from "../EmployeeForm/EmployeeForm.types";

export function useEmployeeList(): EmployeeListProps{


    const [pageNumber, setPageNumber] = useState<number>(0);
    const [pageSize, setPageSize] = useState<number>(10);

    const [employees, setEmployees] = useState<Employee[]>([]);

    async function fetchData(){

        const params = new URLSearchParams();
        params.set("pageNumber", "" + pageNumber);
        params.set("pageSize", "" + pageSize);

        /*const newEmployees = await window.fetch("/api/employee/", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json())
            .then(json => json.content);*/

        const response = await window.fetch("/api/employee/?" + params.toString(), {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json();
        const newValues = json.content;

        setEmployees(newValues);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {
        employees
    };
}