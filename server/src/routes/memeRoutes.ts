import express, { Router } from 'express';
import {
  createMeme,
  getAllMemes,
  deleteMeme,
  getSevenDaysMemes,
} from '../controller/memeController';

const router: Router = express.Router();

router.route('/').post(createMeme).get(getAllMemes);
router.route('/:memeId').delete(deleteMeme);
router.route('/getSevenDaysMemes').get(getSevenDaysMemes);

export default router;
