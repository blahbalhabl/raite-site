import Logo from '../assets/Logo.png'

const Header = () => {
  return (
    <div className='flex w-full bg-transparent p-5'>
      <div className=''>
        <img src={Logo} alt="logo.png" />
      </div>
    </div>
  )
}

export default Header