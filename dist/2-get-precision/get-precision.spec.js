"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_precision_1 = require("./get-precision");
describe("getPrecision()", function () {
    it("Returns the decimal precision up to 5", function () { return __awaiter(void 0, void 0, void 0, function () {
        var tests, tests_1, tests_1_1, _a, n, expected;
        var e_1, _b;
        return __generator(this, function (_c) {
            tests = [
                { n: 1.2, expected: 1 },
                { n: 1.25, expected: 2 },
                { n: 1.0, expected: 0 },
                { n: 1.12345, expected: 5 },
                { n: 1.10101, expected: 5 },
                { n: -1.2, expected: 1 },
                { n: -1.25, expected: 2 },
                { n: -1.0, expected: 0 },
                { n: -1.12345, expected: 5 },
                { n: -1.10101, expected: 5 },
            ];
            try {
                for (tests_1 = __values(tests), tests_1_1 = tests_1.next(); !tests_1_1.done; tests_1_1 = tests_1.next()) {
                    _a = tests_1_1.value, n = _a.n, expected = _a.expected;
                    expect(get_precision_1.getPrecision(n)).toBe(expected);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (tests_1_1 && !tests_1_1.done && (_b = tests_1.return)) _b.call(tests_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return [2 /*return*/];
        });
    }); });
    it("Returns the decimal precision up to 10", function () { return __awaiter(void 0, void 0, void 0, function () {
        var tests, tests_2, tests_2_1, _a, n, expected;
        var e_2, _b;
        return __generator(this, function (_c) {
            tests = [
                { n: 1.123456789, expected: 9 },
                { n: 1.1234567891, expected: 10 },
                { n: 1.123456, expected: 6 },
                { n: -1.123456789, expected: 9 },
                { n: -1.1234567891, expected: 10 },
                { n: -1.123456, expected: 6 },
            ];
            try {
                for (tests_2 = __values(tests), tests_2_1 = tests_2.next(); !tests_2_1.done; tests_2_1 = tests_2.next()) {
                    _a = tests_2_1.value, n = _a.n, expected = _a.expected;
                    expect(get_precision_1.getPrecision(n)).toBe(expected);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (tests_2_1 && !tests_2_1.done && (_b = tests_2.return)) _b.call(tests_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return [2 /*return*/];
        });
    }); });
    it("Returns the decimal precision up to 20", function () { return __awaiter(void 0, void 0, void 0, function () {
        var tests, tests_3, tests_3_1, _a, n, expected;
        var e_3, _b;
        return __generator(this, function (_c) {
            tests = [
                { n: 1e-18, expected: 18 },
                { n: 1e-20, expected: 20 },
                { n: -1e-18, expected: 18 },
                { n: -1e-20, expected: 20 },
            ];
            try {
                for (tests_3 = __values(tests), tests_3_1 = tests_3.next(); !tests_3_1.done; tests_3_1 = tests_3.next()) {
                    _a = tests_3_1.value, n = _a.n, expected = _a.expected;
                    expect(get_precision_1.getPrecision(n)).toBe(expected);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (tests_3_1 && !tests_3_1.done && (_b = tests_3.return)) _b.call(tests_3);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=get-precision.spec.js.map