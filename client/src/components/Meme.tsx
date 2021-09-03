import React, { useEffect, useState } from 'react';
import { deleteMeme } from '../action/memeAction';
import { baseURL } from '../baseURL';
import { useMeme } from '../context/MemeProvider';
import { MemeType } from '../types';

interface MemeProps {
  meme: MemeType;
}

const Meme: React.FC<MemeProps> = ({ meme }) => {
  const [memeId, setMemeId] = useState('');

  const { values, dispatch } = useMeme();

  useEffect(() => {
    setMemeId(meme._id);
  }, [meme._id]);

  console.log(values);
  const delMemeHandler = () => {
    console.log(memeId);
    deleteMeme(dispatch, memeId);
  };

  const img = meme?.image.includes('dist') ? baseURL + meme?.image : meme.image;

  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full relative z-10">
        <img src={img} alt="img" className="w-full h-full" />
      </div>
      <div className="absolute inset-0 opacity-0 hover:opacity-100 cursor-pointer z-20">
        <button
          onClick={delMemeHandler}
          className="w-10 h-10 text-red-500 hover:text-gray-900 absolute bottom-0 right-0 bg-gray-900 hover:bg-red-500"
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Meme;
