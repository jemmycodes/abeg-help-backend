import mongoose from 'mongoose';
import { IToken } from '../common/interfaces/IToken';

type TokenModel = mongoose.Model<IToken>;

const tokenSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	token: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		expires: 600,
	},
});

export default mongoose.model<IToken, TokenModel>('Token', tokenSchema);
