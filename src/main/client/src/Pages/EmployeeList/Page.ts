import {Employee} from "../EmployeeForm/EmployeeForm.types";

export type Page<T> = {
    content: T[];
    totalPages: number;
    pageSize: number;
    pageNumber: number;
}

export const DEFAULT_PAGE = {
    content: [],
    totalPages: 0,
    pageSize: 0,
    pageNumber: 0
}