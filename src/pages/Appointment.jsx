import Button from "../components/Button";
import MESSAGE from "../assets/images/chat notif black.png";
import LOGO_BLACK from "../assets/images/Logo Black.png";
import { useNavigate } from "react-router-dom";

const Appointment = () => {
  const nav = useNavigate();
  return (
    <div className="bg-secondary-tone-1 h-screen flex flex-col items-center">
      <div className="flex justify-between ">
        <div className="w-full max-w-[300px] h-[200px] ">
          <img
            src={LOGO_BLACK}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex gap-5 items-center max-w-[60%]">
          <Button label={"Home"} handleClick={() => nav("/")} />
          <span>Register for Free</span>
          <Button label="Login" type={"primary"} />
          <p>
            Choose your preferred doctor and time to book an appointment or
            consultation
          </p>
          <div className="h-[57px] w-[57px] bg-primary rounded-xl" />
          <img src={MESSAGE} alt="message" className="objec-contain h-10" />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
