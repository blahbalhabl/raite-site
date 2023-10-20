import Union from '../assets/images/Union.png'

const Landing = () => {
  return (
    <div className="bg-slate-300">
      <div className="p-5 pt-0 absolute w-fulltop-0">
        {/* <img className='z-0 w-full h-auto' src={Union} /> */}
        <div className='flex justify-between items-center z-10'>
          <h1 className='text-3xl text-white  z-10'>
          Connect, Consult, and Care Remotely
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Landing