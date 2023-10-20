import Button from '../components/Button'
import Footer from '../components/Footer'
import Union from '../assets/images/Union.png'
import IconText from '../assets/images/idk.png'
import Patients from '../assets/images/Patients.png'
import Banner from '../assets/images/hero banner 2.png'
import Doctor3 from '../assets/images/hero banner 3.png'
import Banner1 from '../assets/images/hero banner 1.png'
import ButtonImg from '../assets/images/hero banner button.png'
import Play from '../assets/images/Play button.png'
import AboutUs1 from '../assets/images/About Us 1.png'
import AboutUs2 from '../assets/images/About Us 2.png'
import Text from '../assets/images/Chat button.png'
import Call from '../assets/images/Call button.png'
import ArrowRight from '../assets/images/button.png'
import Slider from '../assets/images/Slider.png'
import Steps1 from '../assets/images/Steps 1.png'
import Steps2 from '../assets/images/Steps 2.png'
import Steps3 from '../assets/images/Steps 3.png'
import Steps4 from '../assets/images/Steps 4.png'
import Steps5 from '../assets/images/Steps 5.png'

const Landing = () => {
  return (
    <div className="h-max absolute w-full text-black bg-slate-100">
      {/* Section 1 */}
      <div className='absolute w-full z-0 px-10'>
        <img className='w-full' src={Union} />
      </div>
      <div className="relative mt-96 px-[10%] flex-col gap-64 w-full z-20">
        <div className=" flex justify-between gap-32">
          <h1 className="text-white text-8xl font-bold w-4/6">
            Lorem ipsum dolor sit amet.
          </h1>
          <div className='text-white w-2/6'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae, id cum veniam vitae odio delectus dicta voluptas dolorem atque!</p>
            <div className='flex text-white'>
              <button className=''>
                Lets Talk!
              </button>
              <button className=''>
                <img src={Play} />
              </button>
            </div>
          </div>
        </div>
        <div className='mt-44 flex justify-between items-center'>
            <img src={IconText} />
            <img src={Patients}/>
        </div>
        {/* <div className='relative bottom-0'>
          <img className='absolute -bottom-44 -left-72 rotate-[-25deg]' src={Banner1} />
          <img className='absolute bottom-0' src={Banner} />
          <img className='absolute -bottom-44 left-64 rotate-[20deg]' src={Doctor3} />
          <button className="absolute -bottom-24 left-20">
            <img src={ButtonImg} />
          </button>
        </div> */}
      </div>
      <div className='mt-96 flex flex-col'>
        <div className='flex justify-between items-center gap-20 mt-[700px] px-[10%] my-44'>
          <span className='w-2/4'>
            <h1 className='p-5 pl-0 w-max border-t-2 text-5xl font-mazzard-bold text-start border-blue-300'>
              About Us
            </h1>
          </span>
          <p 
            className='w-2/4 text-4xl font-bold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam porro molestias cupiditate aspernatur dicta expedita possimus ut alias dolor explicabo.
          </p>
        </div>
      </div>
      {/* Section 2 */}
      <div className='flex justify-between px-[10%]'>
        <div className='w-auto'>
          <img className='w-full' src={AboutUs2} alt="" />
          <div className='flex my-5 p-5 px-0 gap-10'>
            <div className='flex flex-col justify-center items-center p-14 outline outline-1 outline-primary rounded-[50px] w-1/2'>
              <h1 className='font-mazzard-bold text-8xl'>325</h1>
              <p className='w-4/6 text-center'>Doctor and Specialist</p>
            </div>
            <div className='flex flex-col justify-center items-center p-14 bg-primary rounded-[50px] text-white w-1/2'>
              <h1 className='font-mazzard-bold text-8xl'>20k</h1>
              <p className='w-4/6 text-center'>Patient in Case</p>
            </div>
          </div>
          <img className='w-full' src={AboutUs1} alt="" />
        </div>
        <div className='flex w-1/2 flex-col gap-10'>
          <div className='flex flex-col gap-10 border-b-2 border-b-primary p-10'>
            <span className='p-4 px-5 text-xl font-mazzard-bold text-white rounded-full bg-primary w-max'>
              01
            </span>
            <h1 className='text-4xl font-mazzard-bold'>
              Virtual Consultations
            </h1>
            <p className='w-5/6 text-xl font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est illum explicabo perspiciatis labore! Quisquam obcaecati iusto magni, blanditiis itaque sequi!</p>
            <span className='flex gap-5 rounded-full p-2 w-max bg-primary'>
              <img src={Text} alt="" />
              <img className='object-contain' src={Call} alt="" />
            </span>
          </div>
          <div className='flex flex-col gap-10 border-b-2 border-b-primary p-10'>
            <span className='p-4 px-5 text-xl font-mazzard-bold text-white rounded-full bg-primary w-max'>
              02
            </span>
            <h1 className='text-4xl font-mazzard-bold'>
              Remote Patient Monitor
            </h1>
            <p className='w-5/6 text-xl font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est illum explicabo perspiciatis labore! Quisquam obcaecati iusto magni, blanditiis itaque sequi!</p>
          </div>
          <div className='flex flex-col gap-10 p-10'>
            <span className='p-4 px-5 text-xl font-mazzard-bold text-white rounded-full bg-primary w-max'>
              03
            </span>
            <h1 className='text-4xl font-mazzard-bold w-5/6'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet consectetur quia labore veniam! Eligendi ratione aliquid facilis nam saepe voluptate.
            </h1>
            <span
              className='flex justify-end items-center w-full font-bold text-2xl gap-10'
            >
              See More
              <img src={ArrowRight} />
            </span>
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className='object-contain mt-32 w-full'>
        <img className='w-full' src={Slider}  />
      </div>
      <div className='p-[10%]'>
        <div className='flex justify-between items-center'>
          <span className='flex flex-col gap-5 text-5xl font-bold'>
            <h1>Pre-Clinical Intake That's</h1>
            <h1 className='text-secondary'>As Easy As Sending A Text</h1>
          </span>
          <div className='w-1/6'>
            <Button label="Learn More" type={'primary'} />
          </div>
        </div>
      </div>
      <div className='flex flex-col h-max'>
        <div className='flex'>
          <img src={Steps1} alt="" />
          <img src={Steps2} alt="" />
        </div>
        <div className='flex'>

        </div>
      </div>
    </div>
  );
};

export default Landing;
