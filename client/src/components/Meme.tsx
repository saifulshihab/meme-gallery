import React from 'react';

interface MemeProps {
  src: string;
}

const Meme: React.FC<MemeProps> = ({ src }) => {
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full relative z-10">
        <img src={src} alt="img" className="w-full h-full" />
      </div>
      <div className="absolute inset-0 opacity-0 hover:opacity-100 cursor-pointer z-20">
        <button className="w-10 h-10 text-red-500 hover:text-gray-900 absolute bottom-0 right-0 bg-gray-900 hover:bg-red-500">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Meme;
