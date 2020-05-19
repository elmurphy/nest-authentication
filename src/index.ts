import { Module, DynamicModule } from "@nestjs/common";
import { AuthenticationController } from "./controller/authentication.controller";
import { MongooseModule } from "@nestjs/mongoose";
import UserSchema from "./model/user/index.model";
import { ModuleOptions } from "./model/moduleoptions/index.model";
import { AuthenticationService } from "./service/authentication.service";

// @Module({
// 	imports: [MongooseModule.forFeature([{ name: "users", schema: UserSchema }])],
// 	controllers: [AuthenticationController],
// 	providers: [AuthenticationService],
// })
// export class AuthenticationModule {
// 	// constructor(moduleOptions: ModuleOptions);
// }
export declare class AuthenticationModule {
	static initialize(options?: ModuleOptions): DynamicModule;
}
