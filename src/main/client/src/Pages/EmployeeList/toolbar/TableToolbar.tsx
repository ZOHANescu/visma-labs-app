import {Button} from "@mui/material";

export type TableToolbarProps = {
    pageNumber: number;
    setPageNumber(newNumber: number): void;
    totalPages: number;
}

export function TableToolbar(props: TableToolbarProps){
    return (<div className={"employee-list__table-toolbar"}>
        <Button variant={"contained"}>{"<"}</Button>
        <span>{props.pageNumber}</span>
        <Button variant={"contained"}>{">"}</Button>
    </div>)
}