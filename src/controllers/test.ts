import { NextFunction, Request, Response } from 'express';
import AppError from 'src/common/utils/appError';
import { catchAsync } from 'src/middlewares';
import { addEmailToQueue } from 'src/queues/emailQueue';

export const test = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
	if (req.body) {
		return next(new AppError('Test error', 400));
	} else {
		addEmailToQueue({
			type: 'passwordResetSuccessful',
			data: {
				to: 'obcbeats@gmail.com',
				priority: 'high',
			},
		});
		return res.status(200).json({
			status: 'success',
			message: 'Test route',
		});
	}
});
