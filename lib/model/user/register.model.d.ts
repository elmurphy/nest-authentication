import * as mongoose from "mongoose";
export interface IUserRegister extends mongoose.Document {
    email: string;
    password: string;
    password2: string;
}
//# sourceMappingURL=register.model.d.ts.map