import { Request } from 'express';
import { Require_id } from 'mongoose';
import Multer from 'multer';
import { IUser } from './user';
interface CustomRequest extends Request {
	user?: Require_id<IUser>;
	file?: Multer.File;
}

export { CustomRequest };
