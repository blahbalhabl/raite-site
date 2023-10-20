import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Header from '../components/Header'
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
import Testimonals from '../assets/images/Testimonials Background.png'
import Testimonal from '../assets/images/Testimonial.png'
import Star from '../assets/images/star.png'
import Blogs1 from '../assets/images/Blogs 1.png'
import Blogs2 from '../assets/images/Blogs 2.png'
import Blogs3 from '../assets/images/Blogs 3.png'

const Landing = () => {
  const nav = useNavigate();
  return (
    <>
    <Header />
    <div className="h-max absolute top-0 w-full text-black bg-slate-100">
      {/* Section 1 */}
      <div className='absolute bg-primary rounded-b-[150px] overflow-clip'>
        <div className="relative mt-96 px-[10%] flex-col gap-64 w-full z-20">
          <div className=" flex flex-col justify-center items-center gap-10 lg:flex-row lg:justify-between lg:gap-32">
            <h1 className="text-white text-4xl lg:text-8xl font-bold lg:w-4/6">
              Lorem ipsum dolor sit amet.
            </h1>
            <div className='text-white w-4/6 lg:w-2/6'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae, id cum veniam vitae odio delectus dicta voluptas dolorem atque!</p>
              <div className='flex text-white mt-5'>
                <Button className='mr-10' label="Let's Talk" type={'primary'} handleClick={() => nav('/appointment')}/>
                <button className=''>
                  <img src={Play} />
                </button>
              </div>
            </div>
          </div>
          <div className='mt-44 flex justify-between items-center mb-[800px]'>
              <img src={IconText} />
              <img src={Patients}/>
          </div>
          <div className='relative left-1/2 -translate-x-52 bottom-0'>
            <img className='absolute -bottom-48 -left-72 rotate-[-25deg]' src={Banner1} />
            <img className='absolute -bottom-24' src={Banner} />
            <img className='absolute -bottom-48 left-64 rotate-[20deg]' src={Doctor3} />
          </div>
        </div>
      </div>
      <button className="absolute top-[1550px] left-1/2 z-20 -translate-x-1/2">
          <img src={ButtonImg} />
      </button>
      <div className='mt-[1200px] flex flex-col'>
        <div className='flex flex-col justify-between items-center gap-20 mt-[700px] px-[10%] my-44 lg:flex-row'>
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
      <div className='flex flex-col justify-between px-[10%] lg:flex-row'>
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
        <div className='flex lg:w-1/2 flex-col gap-10'>
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
            <h1 className='text-3xl font-mazzard-bold w-5/6'>
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
      <div className='p-[10%] pb-10'>
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
      <div className='relative flex flex-col justify-center items-center h-max p-[10%] pt-0 gap-5'>
        <div className='flex'>
          <img className='-mr-24' src={Steps1} alt="" />
          <div className='relative text-white font-mazzard-bold'>
            <h2 className='absolute top-11 left-10 z-20 text-5xl'>
              01
            </h2>
            <h2 className='absolute top-20 left-44 text-5xl'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, vero.
            </h2>
            <img src={Steps2} alt="" />
          </div>
        </div>
        <div className='flex justify-center items-center text-white font-bold p-[10%] pt-0 gap-5'>
          <div className='relative flex -mr-36'>
            <h2 className='absolute top-11 right-52 z-20 text-5xl'>
              02
            </h2>
            <h2 className='absolute top-40 text-2xl left-8 w-4/6'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h2>
            <img src={Steps3} />
          </div>
          <img src={Steps4} />
          <div className='relative flex text-black'>
            <h2 className='absolute top-11 left-16 z-20 text-5xl'>
              03
            </h2>
            <h2 className='absolute top-40 text-2xl left-10 w-5/6'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h2>
            <img src={Steps5} />
          </div>
        </div>
      </div>
      {/* Section 4 */}
      <div className='w-full h-auto relative flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center absolute'>
          <h1 className='text-7xl font-mazzard-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-600'>
            Client Testimonals
          </h1>
          <div className='flex flex-col gap-5 absolute top-32'>
            <h1 className='text-5xl font-mazzard-bold lg:ml-96'>Jane Austine</h1>
            <p className='lg:ml-96'>43 years old</p>
            <span className='flex lg:ml-96'>
              <img src={Star}/>
              <img src={Star}/>
              <img src={Star}/>
              <img src={Star}/>
              <img src={Star}/>
            </span>
            <p className='ml-32 mt-24 w-5/6 p-5 pt-0 font-bold text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores ipsam animi totam eum minima nobis, quod culpa at dolorem. Ut illum deserunt labore qui velit numquam tenetur! Illo, commodi expedita praesentium maiores quia ab corrupti magnam, veniam officiis aliquam reiciendis repudiandae voluptates facere architecto illum ullam rerum, perspiciatis quod!
            </p>
          </div>
          
          <img src={Testimonal} />
        </div>
        <img className='w-full' src={Testimonals}/>
      </div>
      {/* Section 5 */}
      <div className='flex flex-col gap-10 p-[10%]'>
        <div className='px-20'>
          <h1 className='text-3xl font-mazzard-bold'>
            Not just words,
          </h1>
          <h1 className='text-3xl font-mazzard-bold'>
            Take a look at our writing.
          </h1>
        </div>
        <div className='border-t-2 border-b-2 py-10 flex justify-between items-center mx-20'>
          <p className='w-2/6 font-bold'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet at repudiandae eum deserunt officiis tempore dolor voluptatibus maiores sequi vero.
          </p>
          <Button className='w-max py-3 px-20' label="View all Articles" type={'primary'}/>
        </div>
        <div className=' flex flex-col items-start justify-center lg:flex-row'>
          <div className='relative flex flex-col gap-5 h-full'>
            <div className=''>
              <div className='absolute flex flex-col gap-5 text-white left-96 top-10 text-sm'>
                <span className='flex gap-2'>
                  <h3 className='bg-gradient-to-t from-blue-300 to-blue-500 px-1'>
                    Mental Health
                  </h3>
                  <p>2023, 25 May</p>
                </span>
                  <h3 className='w-4/6 font-bold text-base'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, in?
                  </h3>
                  <p className='w-4/6 text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus unde repellat iusto officiis tempore quia officia rerum aliquam molestias a!
                  </p>
                  <Button className='text-white border-white w-3/6' label='Read More'/>
              </div>
              <img className='w-5/6' src={Blogs3} />
            </div>
            <div className='relative'>
              <div className='absolute flex flex-col gap-5 text-white left-10 top-10 text-sm w-2/6'>
                <span className='flex gap-2'>
                  <h3 className='bg-gradient-to-t from-blue-300 to-blue-500 px-1'>
                    Self Understanding
                  </h3>
                  <p>2023, 25 May</p>
                </span>
                <h3 className='font-bold text-base'>
                  Lorem ipsum dolor sit amet consectetur,
                </h3>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus unde repellat iusto officiis tempore quia officia rerum aliquam molestias a!
                </p>
                <Button className='text-white border-white w-3/6' label='Read More'/>
              </div>
              <img src={Blogs2} />
            </div>
          </div>
          <div className='mt-5 lg:mt-0 lg:-ml-28'>
            <div className='relative'>
              <div className='absolute flex flex-col gap-2 right-5 bottom-5 text-sm w-4/6'>
                <span className='flex gap-2'>
                  <h3 className='bg-white text-blue-500 px-1'>
                    Mental Health
                  </h3>
                  <p>2023, 25 May</p>
                </span>
                <h3 className='font-bold text-base'>
                  Lorem ipsum dolor sit amet consectetur,
                </h3>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus unde repellat iusto officiis tempore quia officia rerum aliquam molestias a!
                </p>
                <Button className='text-white border-white w-3/6' label='Read More'/>
              </div>
              <img src={Blogs1} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Landing;
