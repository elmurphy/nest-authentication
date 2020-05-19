import * as mongoose from "mongoose";

export default new mongoose.Schema({
	email: {
		type: String,
	},
	profile: {
		type: Object,
		default: null,
	},
});

export interface IUserResponse extends mongoose.Document {
	email: string;
	profile?: object;
}
