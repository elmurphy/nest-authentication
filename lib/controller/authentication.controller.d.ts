import { IUserResponse } from "../model/user/response.model";
import { IUserRegister } from "../model/user/register.model";
import { IUserLogin } from "../model/user/login.model";
import { AuthenticationService } from "../service/authentication.service";
export declare class AuthenticationController {
    private readonly authenticationService;
    constructor(authenticationService: AuthenticationService);
    getToken(userLoginModel: IUserLogin): Promise<string>;
    getRegister(userRegisterModel: IUserRegister): Promise<IUserResponse>;
    getProfile(): Promise<IUserResponse>;
}
//# sourceMappingURL=authentication.controller.d.ts.map