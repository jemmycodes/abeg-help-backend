import { resetPassword, signIn, signUp } from '@/controllers';
import { Router } from 'express';

const router = Router();

router.post('/signup', signUp);
router.post('/reset-password', resetPassword);
router.post('/signin', signIn);

export { router as authRouter };
