"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autoDistribute = void 0;
var autoDistribute = function (total, parts, decimalPrecision) {
    var distribuitions = [];
    for (var i = 0; i < parts; i++) {
        var number = (total / parts).toFixed(decimalPrecision);
        distribuitions.push(Number(number));
    }
    return distribuitions;
};
exports.autoDistribute = autoDistribute;
//# sourceMappingURL=auto-distribute.js.map