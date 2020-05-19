import { Module, DynamicModule } from "@nestjs/common";
import { AuthenticationController } from "./controller/authentication.controller";
import { MongooseModule } from "@nestjs/mongoose";
import UserSchema from "./model/user/index.model";
import { ModuleOptions } from "./model/moduleoptions/index.model";
import { AuthenticationService } from "./service/authentication.service";

@Module({})
export class AuthenticationModule {
	static initialize(options?: ModuleOptions): DynamicModule {
		return {
			imports: [
				MongooseModule.forFeature([{ name: "users", schema: UserSchema }]),
			],
			module: AuthenticationModule,
			controllers: [AuthenticationController],
			providers: [AuthenticationService],
		};
	}
}

export default AuthenticationModule;
