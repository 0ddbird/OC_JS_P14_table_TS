import React from 'react';
import { IOption } from 'react-ts-controlled-select/Select';
interface IPaginationModuleProps {
    rangeOptions: IOption[];
    range: IOption;
    setRange: React.Dispatch<React.SetStateAction<IOption>>;
    cssPrefix: string | undefined;
}
declare const PaginationModule: ({ rangeOptions, range, setRange, cssPrefix }: IPaginationModuleProps) => JSX.Element;
export default PaginationModule;
