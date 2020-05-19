import { Controller, Get, Post } from "@nestjs/common";

import { IUserResponse } from "../model/user/response.model";
import { IUserRegister } from "../model/user/register.model";
import { IUserLogin } from "../model/user/login.model";
import { AuthenticationService } from "../service/authentication.service";

@Controller("authentication")
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post("token")
  async getToken(userLoginModel: IUserLogin): Promise<string> {
    return await this.authenticationService.getToken(userLoginModel);
  }

  @Post("register")
  async getRegister(userRegisterModel: IUserRegister): Promise<IUserResponse> {
    return await this.authenticationService.register(userRegisterModel);
  }

  @Get("profile")
  async getProfile(): Promise<IUserResponse> {
    return await this.authenticationService.getMyProfile();
  }
}
