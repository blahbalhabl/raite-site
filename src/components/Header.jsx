import Logo from "../assets/images/Logo.png";
import Box from "../assets/images/box 1.png";
import Chats from "../assets/images/chat notif white.png";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const nav = useNavigate();
  return (
    <div className="lg:mt-20 flex flex-col lg:flex-row justify-between items-center bg-transparent px-20 w-full">
      <div className="z-10">
        <img src={Logo} alt="logo.png" />
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row gap-5 w-[400px] z-20">
        <span
          onClick={() => nav("/registration")}
          className="text-white font-mazzard-bold w-[300px] cursor-pointer text-center"
        >
          Register for Free
        </span>
        <Button type={"primary"} label={"Login"} />
      </div>
      <div className="flex justify-center gap-5 mt-10 text-white text-md z-10 w-2/6 lg:mt-0">
        <p className="hidden lg:block">
          Choose your preferred doctor and time to book an appointment of
          consultation
        </p>
        <img src={Box} alt="box" className="object-contain" />
        <img src={Chats} alt="chats" className="object-contain" />
      </div>
    </div>
  );
};

export default Header;
