import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var NavModule = function (_a) {
    var items = _a.items, range = _a.range, rangeStart = _a.rangeStart, setRangeStart = _a.setRangeStart, cssPrefix = _a.cssPrefix;
    function handleClick(direction) {
        if (direction === 'next')
            setRangeStart(rangeStart + range);
        else
            setRangeStart(rangeStart - range);
    }
    return (_jsxs("div", { children: [rangeStart > 0 && _jsx("button", __assign({ className: "".concat(cssPrefix !== null && cssPrefix !== void 0 ? cssPrefix : '', "table-nav-button previous"), onClick: function () { return handleClick('previous'); } }, { children: "Previous" }), void 0), _jsx("span", { children: rangeStart / range + 1 }, void 0), rangeStart + range < items.size && _jsx("button", __assign({ className: "".concat(cssPrefix !== null && cssPrefix !== void 0 ? cssPrefix : '', "table-nav-button next"), onClick: function () { return handleClick('next'); } }, { children: "Next" }), void 0)] }, void 0));
};
export default NavModule;
