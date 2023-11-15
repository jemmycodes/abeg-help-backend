import { resetPassword, seedUser, signInController, signUp } from '@/controllers';
import { Router } from 'express';

const router = Router();

router.post('/sign-up', signUp);
router.post('/request-reset-password', resetPassword);
router.get('/seed', seedUser);
router.post('/login', signInController);
router.post('/signup', signUp);

export { router as authRouter };
