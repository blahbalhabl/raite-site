import Logo from '../assets/images/Logo.png'
import Box from '../assets/images/box 1.png'
import Chats from '../assets/images/chat notif white.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between items-center bg-transparent p-20 px-36 '>
      <div className='z-10'>
        <img src={Logo} alt="logo.png" />
      </div>
      <div className='z-10'>
        <Link
          className='font-medium text-white'
          to={'/register'}>
            Register for free
        </Link>
        <button className='text-white'>
          Login
        </button>
      </div>
      <div className='flex gap-5 text-white text-md z-10 w-2/6'>
        <p>
          Choose your preferred doctor and time to book an appointment of consultation
        </p>
        <img src={Box} alt="box" />
        <img src={Chats} alt="chats" />
      </div>
    </div>
  );
};

export default Header;
