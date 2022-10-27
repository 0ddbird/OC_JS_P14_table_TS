import React from 'react';
import PropTypes from 'prop-types';
import { ISortOption } from './interfaces';
interface ITableHeadingProps {
    category: {
        name: string;
        value: string;
    };
    setSortOption: React.Dispatch<React.SetStateAction<ISortOption | undefined>>;
    cssPrefix: string | undefined;
}
declare const TableHeading: {
    ({ category, setSortOption, cssPrefix }: ITableHeadingProps): JSX.Element;
    propTypes: {
        category: PropTypes.Requireable<object>;
        setSortOption: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
export default TableHeading;
