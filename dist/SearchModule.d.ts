import React from 'react';
interface ISearchModuleProps {
    setSearchKeyword: React.Dispatch<React.SetStateAction<string | undefined>>;
    cssPrefix: string | undefined;
}
declare const SearchModule: ({ setSearchKeyword, cssPrefix }: ISearchModuleProps) => JSX.Element;
export default SearchModule;
