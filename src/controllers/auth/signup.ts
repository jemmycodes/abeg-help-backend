import { Provider } from '@/common/constants';
import { setCache, setCookie } from '@/common/utils';
import AppError from '@/common/utils/appError';
import { AppResponse } from '@/common/utils/appResponse';
import { catchAsync } from '@/middlewares';
import { UserModel as User } from '@/models';
import { Request, Response } from 'express';

export const signUp = catchAsync(async (req: Request, res: Response) => {
	const { email, firstName, lastName, phoneNumber, password, gender } = req.body;

	if (!email || !firstName || !lastName || !phoneNumber || !password || !gender) {
		throw new AppError('Incomplete signup data', 400);
	}

	const existingUser = await User.findOne({ $or: [{ email }, { phoneNumber }] });
	if (existingUser) {
		throw new AppError(`${existingUser.email === email ? 'Email' : 'Phone number'} has already been used`, 409);
	}

	const user = await User.create({
		email,
		firstName,
		lastName,
		phoneNumber,
		password,
		gender,
		providers: Provider.Local,
	});

	const accessToken = await user.generateAccessToken();
	const refreshToken = await user.generateRefreshToken();

	setCookie(res, 'abegAccessToken', accessToken!, {
		maxAge: 15 * 60 * 1000, // 15 minutes
	});

	setCookie(res, 'abegRefreshToken', refreshToken, {
		maxAge: 24 * 60 * 60 * 1000, // 24 hours
	});

	await setCache(user._id.toString(), user.toJSON(['password']));

	AppResponse(
		res,
		201,
		user.toJSON([
			'refreshToken',
			'loginRetries',
			'isEmailVerified',
			'lastLogin',
			'password',
			'__v',
			'createdAt',
			'updatedAt',
		]),
		'Account created successfully'
	);
});
