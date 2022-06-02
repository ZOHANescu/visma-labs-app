import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {Employee} from "../EmployeeForm/EmployeeForm.types";
import './EmployeeList.css';
import {Page} from "./Page";

export type EmployeeListProps = {
    page: Page<Employee>
}

function EmployeeRow(props: {employee: Employee}){
    return(
        <TableRow>
            <TableCell>{props.employee.firstName}</TableCell>
            <TableCell>{props.employee.lastName}</TableCell>
            <TableCell>{props.employee.salary}</TableCell>
        </TableRow>
    );
}

export function EmployeeList(props: EmployeeListProps){
    return (
        <TableContainer component={Paper} className={"employee-list__table"}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>First name</TableCell>
                        <TableCell>Last name</TableCell>
                        <TableCell>Salary</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.page.content.map((employee) =>
                        <EmployeeRow key={employee.id} employee={employee}/>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}