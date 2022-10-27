/// <reference types="react" />
import { ITableContent, ITableOptions } from './interfaces';
import './table_main.css';
export interface ITableProps {
    content: ITableContent;
    options: ITableOptions;
}
declare const Table: ({ content, options }: ITableProps) => JSX.Element;
export default Table;
