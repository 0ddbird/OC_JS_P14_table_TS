import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Select from 'react-ts-controlled-select/Select';
var PaginationModule = function (_a) {
    var rangeOptions = _a.rangeOptions, range = _a.range, setRange = _a.setRange, cssPrefix = _a.cssPrefix;
    return (_jsxs("div", __assign({ className: "".concat(cssPrefix !== null && cssPrefix !== void 0 ? cssPrefix : '', "table-length") }, { children: ["Show ", _jsx(Select, { options: rangeOptions, selected: range, setSelected: setRange }, void 0), " entries"] }), void 0));
};
export default PaginationModule;
