/// <reference types="react" />
import { ITableItem } from './interfaces';
interface ITableRowProps {
    item: [string, ITableItem];
    gridColumns: string;
    cssPrefix: string | undefined;
}
declare const TableRow: ({ item, gridColumns, cssPrefix }: ITableRowProps) => JSX.Element;
export default TableRow;
