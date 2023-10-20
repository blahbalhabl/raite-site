import Footer from "../components/Footer";
import Union from "../assets/images/Union.png";
import IconText from "../assets/images/idk.png";
import Patients from "../assets/images/Patients.png";
import Banner from "../assets/images/hero banner 2.png";
import Doctor3 from "../assets/images/hero banner 3.png";
import Banner1 from "../assets/images/hero banner 1.png";
import Button from "../assets/images/hero banner button.png";

const Landing = () => {
  return (
    <div className="h-max absolute w-full text-black top-0 bg-slate-200">
      <div className="absolute w-full z-0 px-10">
        <img className="w-full" src={Union} />
      </div>
      <div className="relative mt-96 px-[10%] flex-col gap-64 w-full z-20">
        <div className=" flex justify-between gap-32">
          <h1 className="text-white text-8xl font-bold w-4/6">
            Lorem ipsum dolor sit amet.
          </h1>
          <div className="text-white w-2/6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              quae, id cum veniam vitae odio delectus dicta voluptas dolorem
              atque!
            </p>
            <div className="flex text-white">
              <button className="">Lets Talk!</button>
              <button className="">Icon</button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <img src={IconText} />
          <img src={Patients} />
        </div>
        <div className="absolute bottom-0">
          <img
            className="absolute -bottom-44 -left-72 rotate-[-25deg]"
            src={Banner1}
          />
          <img className="absolute bottom-0" src={Banner} />
          <img
            className="absolute -bottom-44 left-64 rotate-[20deg]"
            src={Doctor3}
          />
          <button className="absolute -bottom-24 left-20">
            <img src={Button} />
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-20 mt-[700px] px-[10%] my-44">
          <span className="w-2/4">
            <h1 className="p-5 pl-0 w-max border-t-2 text-4xl font-bold text-start border-blue-300">
              About Us
            </h1>
          </span>
          <p className="w-2/4 text-2xl font-mazzard-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            porro molestias cupiditate aspernatur dicta expedita possimus ut
            alias dolor explicabo.
          </p>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Landing;
