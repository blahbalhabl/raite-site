import Header from "./Header";
import Play from "../assets/images/Play button.png";
import FooterImg from "../assets/images/Footer.png";
import FooterBtn from "../assets/images/hero banner button.png";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Footer = () => {
  const nav = useNavigate();
  return (
    <div className="px-10 bottom-0 w-full relative">
      <div className="w-full">
        <button className="flex absolute top-5 left-1/2 -translate-x-1/2 md:w-[150px] lg:w-[500px] justify-center items-center">
          <img className="rotate-180" src={FooterBtn} />
        </button>
        <div className="flex flex-col gap-32 absolute bottom-20 mb-20">
          <div className="flex justify-between px-40 mr-10">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-32">
              <h1 className="text-white text-4xl lg:text-8xl font-mazzard-bold lg:w-5/6">
                Connect, Consult, and Care Remotely
              </h1>
              <div className="text-white lg:w-2/6">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam quae, id cum veniam vitae odio delectus dicta
                  voluptas dolorem atque!
                </p>
                <div className="flex text-white mt-5">
                  <Button
                    className="mr-10"
                    label="Let's Talk"
                    type={"primary"}
                    handleClick={() => nav("/appointment")}
                  />
                  <button className="">
                    <img src={Play} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-[5%]">
            <Header />
          </div>
        </div>
      </div>
      <img className="w-full object-contain" src={FooterImg} />
    </div>
  );
};

export default Footer;
