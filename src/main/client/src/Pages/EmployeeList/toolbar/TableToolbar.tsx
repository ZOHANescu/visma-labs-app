import {Button, IconButton, TextField} from "@mui/material";
import {PersonAddAlt} from "@mui/icons-material";
import {Employee} from "../../EmployeeForm/EmployeeForm.types";

export type TableToolbarProps = {
    searchQuery: string;
    setSearchQuery(newQuery: string): void;
    pageNumber: number;
    setPageNumber(newNumber: number): void;
    totalPages: number;
}

export function TableToolbar(props: TableToolbarProps){
    return (<div className={"employee-list__table-toolbar"}>
        <TextField
            value={props.searchQuery}
            label={""}
            onChange={(e) => {
                props.setSearchQuery(e.currentTarget.value);
            }}
        />
        <Button
            variant={"contained"}
            onClick={() => {
                if(props.pageNumber != 0){
                    props.setPageNumber(props.pageNumber - 1);
                }
            }}
        >{"<"}</Button>
        <span>{props.pageNumber}</span>
        <Button
            variant={"contained"}
            onClick={() => {
                if(props.pageNumber != props.totalPages - 1){
                    props.setPageNumber(props.pageNumber + 1);
                }
            }}
        >{">"}</Button>
        <IconButton href={"/employee"}><PersonAddAlt/></IconButton>
    </div>)
}