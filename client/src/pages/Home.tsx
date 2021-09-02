import React from 'react';
import Meme from '../components/Meme';

const Home = () => {
  return (
    <div className="w-full h-full">
      {/* upload button */}
      <div className="mt-10 flex items-center justify-between mx-3 sm:mx-0 flex-col sm:flex-row space-y-2 sm:space-y-0">
        <div className="w-full sm:w-96 flex items-center h-8">
          <input
            type="text"
            className="flex-1 h-full border border-gray-900 outline-none placeholder-gray-600 px-2 text-xs"
            placeholder="Link ..."
          />
          <button className="border text-sm border-gray-900 h-full px-3 bg-gray-900 hover:bg-gray-700 text-white transition duration-200">
            Add Meme
          </button>
        </div>
        <button className="border text-sm border-gray-900 w-full sm:w-24 h-8  bg-gray-900 hover:bg-gray-700 text-white transition duration-200">
          <i className="mr-1 fas fa-upload"></i> Upload
        </button>
      </div>

      {/* memes grid view */}

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
        <Meme src="https://api.memegen.link/images/buzz/memes/memes_everywhere.png" />
        <Meme src=" https://api.memegen.link/images/pigeon/Engineer/_/Is_this_Photoshop~q.png" />

        <Meme src="https://api.memegen.link/images/buzz/memes/memes_everywhere.png" />
        <Meme src=" https://api.memegen.link/images/pigeon/Engineer/_/Is_this_Photoshop~q.png" />

        <Meme src="https://api.memegen.link/images/buzz/memes/memes_everywhere.png" />
        <Meme src=" https://api.memegen.link/images/pigeon/Engineer/_/Is_this_Photoshop~q.png" />

        <Meme src="https://api.memegen.link/images/buzz/memes/memes_everywhere.png" />
        <Meme src=" https://api.memegen.link/images/pigeon/Engineer/_/Is_this_Photoshop~q.png" />
      </div>
    </div>
  );
};

export default Home;
