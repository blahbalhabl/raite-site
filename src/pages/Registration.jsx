/* eslint-disable react/prop-types */
import LOGO_BLACK from "../assets/images/Logo Black.png";
import REGISTRATION_EXPLORE from "../assets/images/Registration page 1.png";
import HERO_ONE from "../assets/images/Rectangle 63.png";
import Button from "../components/Button";
import SLIDER_2 from "../assets/images/Slider 2.png";
import REGISTER_HERO from "../assets/images/Contact without Blue Blur.png";
import Footer from "../components/Footer";
import MESSAGE from "../assets/images/chat notif black.png";
import { useNavigate } from "react-router-dom";

const TextField = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      className="border border-black w-full h-[60px] px-4 py-2 rounded-full"
      placeholder={placeholder}
    />
  );
};

const Registration = () => {
  const nav = useNavigate();

  return (
    <div className="bg-secondary-tone-1 h-full flex justify-center flex-col items-center gap-5 ">
      <div className="flex justify-between w-[80%]">
        <div className="w-full max-w-[300px] h-[200px] ">
          <img
            src={LOGO_BLACK}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex gap-5 items-center max-w-[50%]">
          <div className="w-[200px]">
            <Button label={"Home"} handleClick={() => nav("/")} />
          </div>
          <p>
            Choose your preferred doctor and time to book an appointment or
            consultation
          </p>
          <div className="h-[57px] w-[57] bg-primary rounded-xl" />
          <img src={MESSAGE} alt="message" className="objec-contain h-10" />
        </div>
      </div>
      <div className=" p-5 w-[80%] flex flex-col justify-center">
        <div className="flex flex-col items-center lg:flex-row gap-4">
          <div className="flex flex-col gap-4 w-full lg:items-start items-center leading-tight">
            <h2 className="font-mazzard-bold text-2xl lg:text-6xl">
              Welcome to
            </h2>
            <div className="w-full max-w-[500px] h-[200px] ">
              <img
                src={LOGO_BLACK}
                alt="logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="w-full max-w-[500px] h-[300px] relative lg:block hidden">
            <p className="font-mazzard absolute bottom-24 right-0 w-[300px] p-5 text-sm ">
              Join our community and unlock a world of exciting possibilities.
              Registering is quick and easy. Get started now!
            </p>
            <img
              src={REGISTRATION_EXPLORE}
              alt="registration-explore"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="bg-primary p-5 w-full text-white lg:hidden">
            Join our community and unlock a world of exciting possibilities.
            Registering is quick and easy. Get started now!
          </p>
        </div>
        <div className="relative">
          <div className=" absolute left-0 top-0 w-[500px] ">
            <div className="flex flex-col gap-5">
              <div className="max-w-[150px]">
                <Button label={"Our Team"} />
              </div>
              <div className="flex gap-8 items-center">
                <span className="font-mazzard-bold text-6xl">50+</span>
                <p className="w-[300px]">
                  Our team contains more than 50 qualified healthcare
                  professionals worldwide
                </p>
              </div>
            </div>
          </div>
          <img
            src={HERO_ONE}
            alt="hero"
            className="w-full h-full object-contain"
          />
          <div className="absolute flex flex-col bottom-0 right-1 gap-3">
            <div className="max-w-[150px]">
              <Button label={"Why Register"} />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-[31px] font-mazzard-bold h-[31px] border-[1px] border-black rounded-full flex items-center justify-center text-sm">
                  01
                </span>
                <span className="text-sm">
                  Connect with the healthcare professionals
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-[31px] h-[31px] font-mazzard-bold border-[1px] border-black rounded-full flex items-center justify-center text-sm">
                  02
                </span>
                <span className="text-sm">
                  Schedule medical appointments online.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-[31px] h-[31px] font-mazzard-bold border-[1px] border-black rounded-full flex items-center justify-center text-sm">
                  03
                </span>
                <span className="text-sm">
                  Access your health records securely.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-[31px] h-[31px] font-mazzard-bold border-[1px] border-black rounded-full flex items-center justify-center text-sm">
                  04
                </span>
                <span className="text-sm">
                  Receive personalized health recommendations.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img
          src={SLIDER_2}
          alt="slider"
          className="w-full h-full object-contain"
        />
      </div>
      {/* Get Started */}
      <div className=" flex justify-center flex-col gap-5">
        <h1 className="font-mazzard-bold text-9xl text-primary text-center relative top-20">
          GET STARTED
        </h1>
        <div className="w-full relative top-48 left-1">
          <img
            src={REGISTER_HERO}
            alt="hero"
            className="w-full h-full object-contain"
          />
          <div className="absolute right-36 top-36 w-full max-w-[600px] flex flex-col items-center gap-6">
            <h1 className="font-mazzard-bold text-5xl w-[500px] text-center">
              We Take Care About Your Health
            </h1>
            <TextField placeholder={"First Name"} />
            <TextField placeholder={"Last Name"} />
            <TextField placeholder={"Email"} />
            <TextField type={"password"} placeholder={"Password"} />
            <div className="flex gap-2">
              <input type="checkbox" />
              <span className="text-sm">
                By clicking Sign Up, you agree to our [Terms of Service] and
                [Privacy Policy].
              </span>
            </div>
            <div className="w-[300px]">
              <Button label={"Sign Up"} type="primary" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
