import React from 'react';

interface LoaderProps {
  small?: boolean;
}
const Loader: React.FC<LoaderProps> = ({ small }) => {
  return (
    <div className={`w-full loader mx-auto ${small ? 'text-xs' : 'text-xl'}`}>
      Loading...
    </div>
  );
};

export default Loader;
