import { __read, __spreadArray, __values } from "tslib";
function searchBysearchKeyword(items, keyword) {
    var e_1, _a;
    var result = new Map();
    var lowerCaseKeyword = keyword.toLowerCase();
    try {
        for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
            var _b = __read(items_1_1.value, 2), itemID = _b[0], item = _b[1];
            if (Object.values(item).toString().toLowerCase().includes(lowerCaseKeyword))
                result.set(itemID, item);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}
function selectEntriesInRange(items, range, rangeStart) {
    var result = new Map();
    if (range > items.size)
        range = items.size;
    for (var i = rangeStart; i < rangeStart + range; i++) {
        var key = "".concat(i);
        var value = items.get(key);
        if (items.has(key)) {
            if (value != null)
                result.set(key, value);
        }
    }
    return result;
}
function sortEntries(sortOption, items) {
    var direction = sortOption.sortDirection;
    var result = new Map(__spreadArray([], __read(items), false).sort(function (itemA, itemB) {
        if (itemA[1]["".concat(sortOption.category)] > itemB[1]["".concat(sortOption.category)])
            return -1;
        if (itemA[1]["".concat(sortOption.category)] < itemB[1]["".concat(sortOption.category)])
            return 1;
        return 0;
    }));
    if (direction === 'desc')
        return result;
    else if (direction === 'asc')
        return new Map(__spreadArray([], __read(result), false).reverse());
    else
        return items;
}
function processBatch(items, tableParams) {
    var result = items;
    var searchKeyword = tableParams.searchKeyword, rangeStart = tableParams.rangeStart, sortOption = tableParams.sortOption;
    var range = parseInt(tableParams.range.value);
    if (searchKeyword != null) {
        result = searchBysearchKeyword(items, searchKeyword);
        if (result.size === 0)
            return result;
    }
    result = selectEntriesInRange(result, range, rangeStart);
    if (sortOption != null)
        result = sortEntries(sortOption, result);
    return result;
}
export { processBatch };
