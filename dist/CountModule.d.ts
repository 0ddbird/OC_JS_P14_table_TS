/// <reference types="react" />
interface ICountModuleProps {
    range: number;
    rangeStart: number;
    totalItems: number;
    cssPrefix: string | undefined;
}
declare const CountModule: ({ range, rangeStart, totalItems, cssPrefix }: ICountModuleProps) => JSX.Element;
export default CountModule;
