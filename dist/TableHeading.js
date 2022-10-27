import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PropTypes from 'prop-types';
// Assets
import CaretUp from './assets/caretUp.svg';
import CaretDown from './assets/caretDown.svg';
var TableHeading = function (_a) {
    var category = _a.category, setSortOption = _a.setSortOption, cssPrefix = _a.cssPrefix;
    function handleSortBtnClick(sortDirection) {
        var value = category.value;
        setSortOption({ category: value, sortDirection: sortDirection });
    }
    return (_jsxs("div", __assign({ className: "".concat(cssPrefix !== null && cssPrefix !== void 0 ? cssPrefix : '', "table-header-cell") }, { children: [_jsx("div", { children: category.name }, void 0), _jsxs("div", __assign({ className: 'sort-buttons' }, { children: [_jsx("button", __assign({ className: 'sort-button asc', onClick: function () { return handleSortBtnClick('asc'); } }, { children: _jsx("img", { className: 'caret', src: CaretUp, alt: 'up' }, void 0) }), void 0), _jsx("button", __assign({ className: 'sort-button desc', onClick: function () { return handleSortBtnClick('desc'); } }, { children: _jsx("img", { className: 'caret', src: CaretDown, alt: 'down' }, void 0) }), void 0)] }), void 0)] }), void 0));
};
TableHeading.propTypes = {
    category: PropTypes.object,
    setSortOption: PropTypes.func
};
export default TableHeading;
