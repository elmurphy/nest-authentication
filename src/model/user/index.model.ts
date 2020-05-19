import * as mongoose from "mongoose";

export default new mongoose.Schema({
	email: {
		type: String,
	},
	password: {
		type: String,
	},
	profile: {
		type: Object,
		default: null,
	},
});

export interface IUser extends mongoose.Document {
	email: string;
	password: string;
	profile?: object;
}
