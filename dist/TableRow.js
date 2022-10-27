import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
var TableRow = function (_a) {
    var item = _a.item, gridColumns = _a.gridColumns, cssPrefix = _a.cssPrefix;
    return (_jsx("div", __assign({ className: "".concat(cssPrefix !== null && cssPrefix !== void 0 ? cssPrefix : '', "item_row"), style: { gridTemplateColumns: gridColumns } }, { children: Object.entries(item[1]).map(function (entry) { return _jsx("div", __assign({ className: 'table-cell' }, { children: entry[1] }), "".concat(item[0]).concat(entry[0])); }) }), void 0));
};
export default TableRow;
