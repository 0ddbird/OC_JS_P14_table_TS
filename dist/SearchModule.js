import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
var SearchModule = function (_a) {
    var setSearchKeyword = _a.setSearchKeyword, cssPrefix = _a.cssPrefix;
    var handleInputChange = function (e) {
        setSearchKeyword(e.target.value);
    };
    return _jsx("div", __assign({ className: "".concat(cssPrefix !== null && cssPrefix !== void 0 ? cssPrefix : '', "table-search") }, { children: _jsx("input", { type: "text", onChange: handleInputChange }, void 0) }), void 0);
};
export default SearchModule;
