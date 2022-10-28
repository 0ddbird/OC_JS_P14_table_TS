import { __assign, __read, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { processBatch } from './tableUtils';
import SearchModule from './SearchModule';
import NavModule from './NavModule';
import CountModule from './CountModule';
import PaginationModule from './PaginationModule';
import TableHeading from './TableHeading';
import TableRow from './TableRow';
import './table_main.css';
var Table = function (_a) {
    var content = _a.content, options = _a.options;
    if (content.items == null)
        return _jsx("div", { children: "No data available" }, void 0);
    var paginationModule = options.paginationModule, searchModule = options.searchModule, countModule = options.countModule, navigationModule = options.navigationModule, paginationOptions = options.paginationOptions, cssPrefix = options.cssPrefix;
    var gridColumns = "repeat(".concat(content.headers.length, ", 1fr)");
    var _b = __read(useState({ label: '10', value: '10' }), 2), range = _b[0], setRange = _b[1];
    var _c = __read(useState(0), 2), rangeStart = _c[0], setRangeStart = _c[1];
    var _d = __read(useState(content.items), 2), currentBatch = _d[0], setCurrentBatch = _d[1];
    var _e = __read(useState(undefined), 2), sortOption = _e[0], setSortOption = _e[1];
    var _f = __read(useState(undefined), 2), searchKeyword = _f[0], setSearchKeyword = _f[1];
    var tableParams = { range: range, rangeStart: rangeStart, sortOption: sortOption, searchKeyword: searchKeyword };
    useEffect(function () {
        var currentBatch = processBatch(content.items, tableParams);
        setCurrentBatch(currentBatch);
    }, [sortOption, range, rangeStart, searchKeyword]);
    return (_jsxs("div", __assign({ className: "".concat(cssPrefix !== null && cssPrefix !== void 0 ? cssPrefix : '', "table") }, { children: [_jsxs("div", __assign({ className: "".concat(cssPrefix !== null && cssPrefix !== void 0 ? cssPrefix : '', "table-top-options") }, { children: [paginationModule && paginationOptions !== undefined && _jsx(PaginationModule, { rangeOptions: paginationOptions, range: range, setRange: setRange, cssPrefix: cssPrefix }, void 0), searchModule && _jsx(SearchModule, { setSearchKeyword: setSearchKeyword, cssPrefix: cssPrefix }, void 0)] }), void 0), _jsx("div", __assign({ className: "".concat(cssPrefix !== null && cssPrefix !== void 0 ? cssPrefix : '', "table-header-row"), style: { gridTemplateColumns: gridColumns } }, { children: content.headers.map(function (category) { return _jsx(TableHeading, { category: category, setSortOption: setSortOption, cssPrefix: cssPrefix }, category.value); }) }), void 0), __spreadArray([], __read(currentBatch), false).map(function (item) { return _jsx(TableRow, { item: item, gridColumns: gridColumns, cssPrefix: cssPrefix }, item[0]); }), _jsxs("div", __assign({ className: "".concat(cssPrefix !== null && cssPrefix !== void 0 ? cssPrefix : '', "table-bottom-options") }, { children: [countModule && _jsx(CountModule, { rangeStart: rangeStart, range: currentBatch.size, totalItems: content.items.size, cssPrefix: cssPrefix }, void 0), navigationModule && _jsx(NavModule, { items: content.items, rangeStart: rangeStart, range: parseInt(range.value), setRangeStart: setRangeStart, cssPrefix: cssPrefix }, void 0)] }), void 0)] }), void 0));
};
export default Table;
