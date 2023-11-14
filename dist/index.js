"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const francoList_1 = __importDefault(require("./francoList"));
function toFranco(inputStr) {
    const convertedString = inputStr.split('').map(char => francoList_1.default[char] || char).join('');
    return convertedString;
}
exports.default = toFranco;
