"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrecision = void 0;
var getPrecision = function (n) {
    n = Math.abs(n); //Convert negative to positive number
    var valueReturn = 0; //return;
    var numberPartsByPoint = n.toString().split('.');
    if (numberPartsByPoint[1]) {
        return numberPartsByPoint[1].length;
    }
    ;
    var numberPartsByHifen = n.toString().split('e-');
    if (numberPartsByHifen[1]) {
        return Number(numberPartsByHifen[1]);
    }
    ;
    return valueReturn;
};
exports.getPrecision = getPrecision;
//# sourceMappingURL=get-precision.js.map