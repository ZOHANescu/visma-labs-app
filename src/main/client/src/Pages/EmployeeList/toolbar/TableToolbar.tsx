import {Button} from "@mui/material";

export type TableToolbarProps = {
    pageNumber: number;
    setPageNumber(newNumber: number): void;
    totalPages: number;
}

export function TableToolbar(props: TableToolbarProps){
    return (<div className={"employee-list__table-toolbar"}>
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
    </div>)
}