function isEmail(value: string) {
	return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value);
}

function isAlphaNumeric(value: string) {
	return /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z'.']/.test(value);
}

import * as mongoose from "mongoose";

const UserRegisterSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
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
			validator: (v: string) => isAlphaNumeric(v),
			message: () => `authentication.isalphanumeric`,
		},
	},
	password2: {
		type: String,
		trim: true,
		maxlength: [18, "authentication.maxlength-18"],
		minlength: [13, "authentication.minlength-13"],
		// validate: {
		//   validator: (value: string) => {
		//     return password == value;
		//   },
		//   message: (props) => `authentication.password2`,
		// },
	},
});

export interface IUserRegister extends mongoose.Document {
	email: string;
	password: string;
	password2: string;
}
