"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationModule = void 0;
var common_1 = require("@nestjs/common");
var authentication_controller_1 = require("./controller/authentication.controller");
var mongoose_1 = require("@nestjs/mongoose");
var index_model_1 = __importDefault(require("./model/user/index.model"));
var authentication_service_1 = require("./service/authentication.service");
var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule_1 = AuthenticationModule;
    AuthenticationModule.initialize = function (options) {
        return {
            imports: [
                mongoose_1.MongooseModule.forFeature([{ name: "users", schema: index_model_1.default }]),
            ],
            module: AuthenticationModule_1,
            controllers: [authentication_controller_1.AuthenticationController],
            providers: [authentication_service_1.AuthenticationService],
            exports: [authentication_service_1.AuthenticationService],
        };
    };
    var AuthenticationModule_1;
    AuthenticationModule = AuthenticationModule_1 = __decorate([
        common_1.Module({})
    ], AuthenticationModule);
    return AuthenticationModule;
}());
exports.AuthenticationModule = AuthenticationModule;
exports.default = AuthenticationModule;
//# sourceMappingURL=index.js.map