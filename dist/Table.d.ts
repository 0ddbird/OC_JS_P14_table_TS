/// <reference types="react" />
import { ITableItems, ITableCategory, ITableOptions } from './interfaces';
import './table_main.css';
export interface ITableProps {
    items: ITableItems;
    categories: ITableCategory[];
    options: ITableOptions;
}
declare const Table: ({ items, categories, options }: ITableProps) => JSX.Element;
export default Table;
