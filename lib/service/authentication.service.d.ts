import { IUser } from "../model/user/index.model";
import { IUserResponse } from "../model/user/response.model";
import { IUserRegister } from "../model/user/register.model";
import { IUserLogin } from "../model/user/login.model";
import { Model } from "mongoose";
export declare class AuthenticationService {
    private readonly userModel;
    private readonly userResponseModel;
    private readonly userRegisterModel;
    private readonly userLoginModel;
    constructor(userModel: Model<IUser>, userResponseModel: Model<IUserResponse>, userRegisterModel: Model<IUserRegister>, userLoginModel: Model<IUserLogin>);
    getToken(userLogin: IUserLogin): Promise<string>;
    register(userRegister: IUserRegister): Promise<IUserResponse>;
    getMyProfile(): Promise<IUserResponse>;
}
//# sourceMappingURL=authentication.service.d.ts.map