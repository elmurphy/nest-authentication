import * as mongoose from "mongoose";

function isAlphaNumeric(value: string) {
	return /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z'.']/.test(value);
}

function isEmail(value: string) {
	return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value);
}

const UserLoginSchema = new mongoose.Schema({
	email: {
		type: String,
		trim: true,
		required: [true, "authentication.required"],
		maxlength: [18, "authentication.maxlength-18"],
		minlength: [13, "authentication.minlength-13"],
		validate: {
			validator: (v: string) => isEmail(v),
			message: () => `authentication.isemail`,
		},
	},
	password: {
		type: String,
		trim: true,
		maxlength: [18, "authentication.maxlength-18"],
		minlength: [13, "authentication.minlength-13"],
		validate: {
			validator: isAlphaNumeric,
			message: () => `authentication.isalphanumeric`,
		},
	},
});

export interface IUserLogin extends mongoose.Document {
	email: string;
	password: string;
}
