import Logo from "../assets/images/Logo.png";
import Box from "../assets/images/box 1.png";
import Chats from "../assets/images/chat notif white.png";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-transparent px-20 ">
      <div className="z-10">
        <img src={Logo} alt="logo.png" />
      </div>
      <div className="flex gap-5 w-[400px] items-center">
        <span className="text-white font-mazzard-bold w-[300px]">
          Register for Free
        </span>
        <Button type={"primary"} label={"Login"} />
      </div>
      <div className="flex gap-5 text-white text-md z-10 w-2/6">
        <p>
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
