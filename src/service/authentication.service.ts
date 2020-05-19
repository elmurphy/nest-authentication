import {
	Injectable,
	NotFoundException,
	NotImplementedException,
} from "@nestjs/common";
import { IUser } from "../model/user/index.model";

import { IUserResponse } from "../model/user/response.model";
import { IUserRegister } from "../model/user/register.model";
import { IUserLogin } from "../model/user/login.model";

import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ModuleOptions } from "../model/moduleoptions/index.model";

@Injectable()
export class AuthenticationService {
	constructor(
		@InjectModel("users") private readonly userModel: Model<IUser>,
		@InjectModel("users")
		private readonly userResponseModel: Model<IUserResponse>,
		@InjectModel("users")
		private readonly userRegisterModel: Model<IUserRegister>,
		@InjectModel("users")
		private readonly userLoginModel: Model<IUserLogin>
	) {}
	async getToken(userLogin: IUserLogin): Promise<string> {
		//TODO: include get token function

		throw new NotImplementedException();

		return "{{token}}";
	}

	async register(userRegister: IUserRegister): Promise<IUserResponse> {
		const newRegisterModel = new this.userRegisterModel(userRegister);
		const error = newRegisterModel.validateSync();
		if (error) {
			throw new Error(error.toString());
    }
    const newUser = new this.userModel(newRegisterModel.toObject());
		const result = await newUser.save();
		return new this.userResponseModel(result);
	}

	async getMyProfile(): Promise<IUserResponse> {
		const currentUserId = "userObjectId";
		const user = this.userModel.findOne({ _id: currentUserId }).exec();
		if (!user) {
			throw new NotFoundException();
		}
		return new this.userResponseModel(user);
	}
}
