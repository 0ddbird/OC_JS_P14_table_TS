import { IOption } from 'react-ts-controlled-select/Select';
export interface ITableItem {
    [key: string]: string;
}
export declare type ITableItems = Map<string, ITableItem>;
declare type PaginationOptions = IOption[];
export interface ITableOptions {
    searchModule: boolean;
    paginationModule: boolean;
    countModule: boolean;
    navigationModule: boolean;
    paginationOptions?: PaginationOptions;
    cssPrefix?: string;
}
export interface ITableCategory {
    name: string;
    value: string;
}
export interface ISortOption {
    sortDirection: 'asc' | 'desc';
    category: string;
}
export interface ITableParams {
    range: IOption;
    rangeStart: number;
    sortOption: ISortOption | undefined;
    searchKeyword: string | undefined;
}
export {};
