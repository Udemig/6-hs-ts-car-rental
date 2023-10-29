import { Link } from 'react-router-dom';
import CustomButton from './../CustomButton/index';

const Header = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-6 sm:px-16 py-4">
        <Link to={'/'}>
          <img width={50} src="/bmw.png" alt="bmw-logo" />
        </Link>

        <CustomButton title="Kaydol" designs="min-w-[130px]" />
      </nav>
    </header>
  );
};

export default Header;
