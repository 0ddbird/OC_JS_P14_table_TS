import React from 'react';
import { ITableItems } from './interfaces';
interface INavModuleProps {
    items: ITableItems;
    range: number;
    rangeStart: number;
    setRangeStart: React.Dispatch<React.SetStateAction<number>>;
    cssPrefix: string | undefined;
}
declare const NavModule: ({ items, range, rangeStart, setRangeStart, cssPrefix }: INavModuleProps) => JSX.Element;
export default NavModule;
