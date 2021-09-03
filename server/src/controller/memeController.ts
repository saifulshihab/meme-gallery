import asyncHandler from 'express-async-handler';
import MemeModel from '../models/MemeModel';

export const createMeme = asyncHandler(async (req, res) => {
  const newMeme = await MemeModel.create(req.body);
  if (newMeme) {
    res.status(200).json(newMeme);
  } else {
    res.status(500);
    throw new Error('Can not create meme!');
  }
});

export const getAllMemes = asyncHandler(async (req, res) => {
  const memes = await MemeModel.find({});
  if (memes) {
    res.status(200).json(memes);
  } else {
    res.status(404);
    throw new Error('Memes not found!');
  }
});

export const deleteMeme = asyncHandler(async (req, res) => {
  const memeId = req.params.memeId;
  const meme = await MemeModel.findById(memeId);

  if (meme) {
    await meme.remove();
    const memes = await MemeModel.find({});
    res.status(200).json(memes);
  } else {
    res.status(404);
    throw new Error('Meme not found!');
  }
});
