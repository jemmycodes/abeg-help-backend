import { Request, Response } from 'express';
import { catchAsync } from 'src/middlewares/catchAsyncErrors';
import { addEmailToQueue } from 'src/queues/emailQueue';

export const test = catchAsync(async (req: Request, res: Response) => {
	addEmailToQueue({
		type: 'passwordResetSuccessful',
		data: {
			to: 'obcbeats@gmail.com',
			priority: 'high',
		},
	});

	// you must explicitly return a response to the client else TS will yell at you
	return res.status(200).json({
		status: 'success',
		message: 'Test route',
	});
});
