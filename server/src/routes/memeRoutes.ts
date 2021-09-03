import express, { Router } from 'express';
import {
  createMeme,
  getAllMemes,
  deleteMeme,
} from '../controller/memeController';

const router: Router = express.Router();

router.route('/').post(createMeme).get(getAllMemes);
router.route('/:memeId').delete(deleteMeme);

export default router;
