import './MainMenu.css';
import { Link } from 'react-router-dom';

const MainMenu: React.FC<any> = () => {
  return (
    <div className='MainMenu'>
      <h1 className='text-center text-white text-2xl mt-48'>CRYSTAL GALAXY</h1>
      <Link
        to='/cut-scene/start'
        className=' text-center bg-white mx-auto block w-48 mt-4'
      >
        Start Game
      </Link>
      <footer className='text-white text-center text-sm mt-6'>
        Crystal Galaxy | Copyright 2020
      </footer>
    </div>
  );
};

export default MainMenu;
