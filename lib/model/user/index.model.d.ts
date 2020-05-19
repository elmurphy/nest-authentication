import * as mongoose from "mongoose";
declare const _default: mongoose.Schema<any>;
export default _default;
export interface IUser extends mongoose.Document {
    email: string;
    password: string;
    profile?: object;
}
//# sourceMappingURL=index.model.d.ts.map