import { Router } from 'express';
import { resetPassword } from '../controllers/resetPasswordController';

const router = Router();

router.post('/request-reset-password', resetPassword);

export { router as authRouter };
