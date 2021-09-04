import { useEffect, useRef, useState } from 'react';
import { createMeme, getAllMemes } from '../action/memeAction';
import { baseURL } from '../baseURL';
import Loader from '../components/Loader';
import Meme from '../components/Meme';
import { useMeme } from '../context/MemeProvider';
import { MemeType } from '../types';
import axios from 'axios';

const Home = () => {
  const [uploading, setUploading] = useState(false);
  const [focusAddBtn, setFocusAddBtn] = useState(false);
  const [memeLink, setMemeLink] = useState('');

  const inputnRef = useRef<HTMLInputElement | null>(null);

  const { values, dispatch } = useMeme();

  useEffect(() => {
    getAllMemes(dispatch);

    if (focusAddBtn) {
      inputnRef.current?.focus();
    }
  }, [dispatch, focusAddBtn]);

  const uploadMemeFileHandler = async (e: any) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    try {
      setUploading(true);
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      const { data } = await axios.post(baseURL + '/upload', formData, config);
      if (data) {
        setMemeLink(data);
        setUploading(false);
        setFocusAddBtn(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addMemeHandler = () => {
    if (memeLink !== '') {
      if (memeLink.includes('.')) {
        createMeme(dispatch, { image: memeLink });
        setMemeLink('');
        setFocusAddBtn(false);
      }
    }
  };

  return (
    <div className="w-full h-full">
      {/* upload button */}
      <div className="mt-10 flex items-center justify-between mx-3 sm:mx-0 flex-col sm:flex-row space-y-2 sm:space-y-0">
        <div className="w-full sm:w-96 flex items-center h-8">
          <input
            ref={inputnRef}
            value={memeLink}
            onChange={(e) => setMemeLink(e.target.value)}
            type="text"
            className="flex-1 h-full border border-gray-900 outline-none placeholder-gray-600 px-2 text-xs focus:ring-2"
            placeholder="Link ..."
          />
          <button
            onClick={addMemeHandler}
            className="border text-sm border-gray-900 h-full px-3 bg-gray-900 hover:bg-gray-700 text-white transition duration-200"
          >
            Add Meme
          </button>
        </div>
        {uploading ? (
          <Loader small />
        ) : (
          <label className="w-full sm:w-32 flex items-center justify-center flex-col px-3 h-8 bg-gray-900 cursor-pointer hover:bg-indigo-600 text-white">
            <div className="flex items-center space-x-1">
              <i className="fas fa-cloud-upload-alt"></i>
              <p className="text-sm">Upload</p>
            </div>
            <input
              onChange={uploadMemeFileHandler}
              type="file"
              className="hidden"
            />
          </label>
        )}
      </div>

      {/* memes grid view */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-cols-max gap-3">
        {values?.loading ? (
          <Loader />
        ) : values?.error ? (
          <p className="text-red-500">{values?.error}</p>
        ) : values?.memes && values?.memes?.length > 0 ? (
          values?.memes?.map((meme: MemeType) => (
            <Meme key={meme._id} meme={meme} />
          ))
        ) : (
          <p className="text-sm text-blue-500">
            No Memes! Try uploading one...
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
