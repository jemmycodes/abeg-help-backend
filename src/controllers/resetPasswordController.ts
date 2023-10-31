import { NextFunction, Request, Response } from 'express';
import { catchAsync } from 'src/middlewares';
import { generateRandomString, hashData } from '../common/utils';
import AppError from '../common/utils/appError';
import { AppResponse } from '../common/utils/appResponse';
import TokenModel from '../models/tokenModel';
import UserModel from '../models/userModel';

export const resetPassword = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
	const { email } = req.body;

	const user = await UserModel.findOne({ email });
	if (!user) {
		return next(new AppError('no user found with provided email', 404));
	}

	await TokenModel.deleteOne({ user: user._id });

	const token = hashData(generateRandomString());

	await TokenModel.create({ user: user._id, token, createdAt: new Date() });

	return AppResponse(res, 200, null, 'Password reset link sent to your email');
});
