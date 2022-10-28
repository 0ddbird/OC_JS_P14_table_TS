import { __assign, __read, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { filterItems } from './tableUtils';
import SearchModule from './SearchModule';
import NavModule from './NavModule';
import CountModule from './CountModule';
import PaginationModule from './PaginationModule';
import TableHeading from './TableHeading';
import TableRow from './TableRow';
import './table_main.css';
var Table = function (_a) {
    var items = _a.items, categories = _a.categories, options = _a.options;
    if (items == null)
        return _jsx("div", { children: "No data available" }, void 0);
    var paginate = options.paginationModule, search = options.searchModule, count = options.countModule, navigate = options.navigationModule, paginationOptions = options.paginationOptions, prefix = options.cssPrefix;
    var gridColumns = "repeat(".concat(categories.length, ", 1fr)");
    var _b = __read(useState({ label: '10', value: '10' }), 2), range = _b[0], setRange = _b[1];
    var _c = __read(useState(0), 2), rangeStart = _c[0], setRangeStart = _c[1];
    var _d = __read(useState(items), 2), displayedItems = _d[0], setDisplayedItems = _d[1];
    var _e = __read(useState(undefined), 2), sortOption = _e[0], setSortOption = _e[1];
    var _f = __read(useState(undefined), 2), searchKeyword = _f[0], setSearchKeyword = _f[1];
    var tableParams = { range: range, rangeStart: rangeStart, sortOption: sortOption, searchKeyword: searchKeyword };
    useEffect(function () {
        setDisplayedItems(filterItems(items, tableParams));
    }, [sortOption, range, rangeStart, searchKeyword]);
    return (_jsxs("div", __assign({ className: "".concat(prefix !== null && prefix !== void 0 ? prefix : '', "table") }, { children: [_jsxs("div", __assign({ className: "".concat(prefix !== null && prefix !== void 0 ? prefix : '', "table-top-options") }, { children: [paginate && paginationOptions !== undefined && _jsx(PaginationModule, { rangeOptions: paginationOptions, range: range, setRange: setRange, cssPrefix: prefix }, void 0), search && _jsx(SearchModule, { setSearchKeyword: setSearchKeyword, cssPrefix: prefix }, void 0)] }), void 0), _jsx("div", __assign({ className: "".concat(prefix !== null && prefix !== void 0 ? prefix : '', "table-header-row"), style: { gridTemplateColumns: gridColumns } }, { children: categories.map(function (category) { return _jsx(TableHeading, { category: category, setSortOption: setSortOption, cssPrefix: prefix }, category.value); }) }), void 0), __spreadArray([], __read(displayedItems), false).map(function (item) { return _jsx(TableRow, { item: item, gridColumns: gridColumns, cssPrefix: prefix }, item[0]); }), _jsxs("div", __assign({ className: "".concat(prefix !== null && prefix !== void 0 ? prefix : '', "table-bottom-options") }, { children: [count && _jsx(CountModule, { rangeStart: rangeStart, range: displayedItems.size, totalItems: items.size, cssPrefix: prefix }, void 0), navigate && _jsx(NavModule, { items: items, rangeStart: rangeStart, range: parseInt(range.value), setRangeStart: setRangeStart, cssPrefix: prefix }, void 0)] }), void 0)] }), void 0));
};
export default Table;
