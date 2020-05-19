"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
function isEmail(value) {
    return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value);
}
function isAlphaNumeric(value) {
    return /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z'.']/.test(value);
}
var mongoose = __importStar(require("mongoose"));
var UserRegisterSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        trim: true,
        required: [true, "authentication.required"],
        maxlength: [18, "authentication.maxlength-18"],
        minlength: [13, "authentication.minlength-13"],
        validate: {
            validator: function (v) { return isEmail(v); },
            message: function () { return "authentication.isemail"; },
        },
    },
    password: {
        type: String,
        trim: true,
        maxlength: [18, "authentication.maxlength-18"],
        minlength: [13, "authentication.minlength-13"],
        validate: {
            validator: function (v) { return isAlphaNumeric(v); },
            message: function () { return "authentication.isalphanumeric"; },
        },
    },
    password2: {
        type: String,
        trim: true,
        maxlength: [18, "authentication.maxlength-18"],
        minlength: [13, "authentication.minlength-13"],
    },
});
//# sourceMappingURL=register.model.js.map