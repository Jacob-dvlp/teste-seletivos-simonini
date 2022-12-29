"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrecision = void 0;
var getPrecision = function (n) {
    n = Math.abs(n); //Convert negative to positive number
    var numberPartsByPoint = n.toString().split('.'); //Split number by point
    var numberPartsByHifen = n.toString().split('e-'); //Split number by hifen
    if (numberPartsByPoint[1])
        return numberPartsByPoint[1].length;
    if (numberPartsByHifen[1])
        return Number(numberPartsByHifen[1]);
    return 0;
};
exports.getPrecision = getPrecision;
//# sourceMappingURL=get-precision.js.map