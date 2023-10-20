import Header from "./Header";
import FooterImg from "../assets/images/Footer.png";
import FooterBtn from "../assets/images/hero banner button.png";

const Footer = () => {
  return (
    <div className="px-10 bottom-0 w-full relative">
      <div className="w-full">
        <button className="flex absolute top-5 left-1/2 -translate-x-1/2 w-[500px] justify-center items-center">
          <img className="rotate-180" src={FooterBtn} />
        </button>
        <div className="flex flex-col gap-32 absolute bottom-20">
          <div className="flex justify-between px-40 mr-10">
            <h1 className="text-white text-8xl font-mazzard-bold w-4/6">
              Lorem ipsum dolor sit amet.
            </h1>
            <div className="text-white w-2/6">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam quae, id cum veniam vitae odio delectus dicta voluptas
                dolorem atque!
              </p>
              <div className="flex text-white">
                <button className="">Lets Talk!</button>
                <button className="">Icon</button>
              </div>
            </div>
          </div>
          <Header />
        </div>
      </div>
      <img className="w-full object-contain" src={FooterImg} />
    </div>
  );
};

export default Footer;
