import Button from "../components/Button";
import MESSAGE from "../assets/images/chat notif white.png";
import LOGO_BLACK from "../assets/images/Logo Black.png";
import { useNavigate } from "react-router-dom";
import GROUP_131 from "../assets/images/group 131.png";
import RegisterForm from "../components/RegisterForm";
import APPOINTMENT_BG from "../assets/images/Appointment hero section.png";
import DOCTOR_BG from "../assets/images/Meet the doctor background.png";
import MEET_THE_DOCTOR from "../assets/images/Meet the doctor.png";
import CTA from "../assets/images/CTA.png";
import Footer from "../components/Footer";

const Appointment = () => {
  const nav = useNavigate();
  return (
    <>
      <div className=" flex flex-col h-screen bg-secondary-tone-1  items-center p-5 relative">
        <div className="flex justify-between w-[80%] absolute z-10">
          <div className="w-full max-w-[300px] h-[200px] ">
            <img
              src={LOGO_BLACK}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex gap-5 items-center max-w-[60%] ">
            <Button
              label={"Home"}
              className={
                "flex-1 text-xs border-secondary text-secondary hover:text-white hover:border-white"
              }
              handleClick={() => nav("/")}
            />
            <span className={"flex-1 text-xs text-white cursor-pointer"}>
              Register for Free
            </span>
            <Button
              className={"flex-1 text-xs"}
              label="Login"
              type={"primary"}
            />
            <div className="h-[57px] w-[57px] bg-white rounded-xl" />
            <img src={MESSAGE} alt="message" className="objec-contain h-10" />
          </div>
        </div>
        <img src={GROUP_131} alt="img" className="absolute top-16" />
        <div className="absolute top-56 w-[80%] flex">
          <h1 className="font-bold text-6xl font-mazzard-bold text-white w-[700px]">
            Consult a doctor anywhere, anytime with{" "}
            <span className="text-secondary">iHealth</span>
          </h1>
          <RegisterForm />
        </div>
        <div className="left-36 absolute -bottom-36">
          <img
            src={APPOINTMENT_BG}
            alt="bg"
            className="h-full w-[600px] object-contain"
          />
        </div>
      </div>
      <div className="h-screen bg-secondary-tone-1 relative -z-10 flex justify-center items-center">
        <div className="z-10">
          <div className="w-[900px] flex justify-end relative">
            <div className="w-[380px] z-10">
              <h1 className="font-mazzard-bold text-primary text-2xl">
                Meet Our Doctors
              </h1>
              <p>
                This is just placeholder text. Don’t be alarmed, this is just
                here to fill up space since your finalized copy isn’t ready yet.
                Once we have your content finalized, we’ll replace this
                placeholder text with your real content.
              </p>
              <div className=" bg-secondary p-5 rounded-md text-center font-mazzard-bold">
                David Backheim
              </div>
            </div>
            <img src={MEET_THE_DOCTOR} alt="doctor" className="absolute" />
          </div>
        </div>
        <div className=" absolute w-full  h-full ">
          <img
            src={DOCTOR_BG}
            alt="doctor"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
      <div className="h-screen bg-secondary-tone-1 relative">
        <img src={CTA} alt="cta" className="h-full w-full object-contain" />
      </div>
      <div className="h-screen bg-secondary-tone-1">
        <Footer />
      </div>
    </>
  );
};

export default Appointment;
