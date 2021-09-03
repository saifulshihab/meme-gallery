import { model, Schema } from 'mongoose';

interface Meme {
  image: string;
}

const schema = new Schema<Meme>(
  {
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const MemeModel = model<Meme>('Meme', schema);

export default MemeModel;
