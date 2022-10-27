import { __assign } from "tslib";
import { jsxs as _jsxs } from "react/jsx-runtime";
var CountModule = function (_a) {
    var range = _a.range, rangeStart = _a.rangeStart, totalItems = _a.totalItems, cssPrefix = _a.cssPrefix;
    return _jsxs("div", __assign({ className: "".concat(cssPrefix !== null && cssPrefix !== void 0 ? cssPrefix : '', "table-count") }, { children: ["Showing ", "".concat(rangeStart + 1), " to ", range < totalItems ? "".concat(rangeStart + range) : "".concat(totalItems), " of ", "".concat(totalItems), " entries"] }), void 0);
};
export default CountModule;
