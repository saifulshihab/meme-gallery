import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between mt-2 mx-3 sm:mx-0">
      <div>
        <Link to="/">
          <p className="text-xl sm:text-3xl font-extrabold text-gray-800">
            Meme <span className="text-indigo-600">Gallery</span>
          </p>
        </Link>
      </div>
      <div className="flex items-center space-x-2">
        <Link to="/stats">
          <button className="border border-gray-900 py-1 px-3 bg-transparent hover:bg-gray-900 font-semibold hover:text-white transition duration-200">
            <i className="far fa-chart-bar"></i> Stats
          </button>
        </Link>
        <a
          href="https://github.com/saifulshihab/meme-gallery"
          target="_blank"
          rel="noreferrer"
          className="border border-gray-900 py-1 px-3 bg-transparent hover:bg-gray-900 font-semibold hover:text-white transition duration-200"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
