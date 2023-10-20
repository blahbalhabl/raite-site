import REGISTER_BG from "../assets/images/Appointment contact 1.png";
import Button from "./Button";

const RegisterForm = () => {
  return (
    <div className="max-w-[600px] relative">
      <Button
        label={"Set your schedule"}
        type={"primary"}
        className={"absolute !w-[200px] top-5 right-10"}
      />
      <img
        src={REGISTER_BG}
        alt="img"
        className="object-contain h-full w-full "
      />
      <form className="absolute top-36 left-11 flex flex-col gap-5 font-normal p-5">
        <div className="flex items-center">
          <div className="">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              className="border p-1 rounded-full px-2"
              placeholder="Jhon"
            />
          </div>
          <div className="">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              className="border p-1 rounded-full px-2"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="last-name">Email Address</label>
          <input
            type="text"
            className="border p-1 rounded-full px-2 max-w-[400px]"
            placeholder="jhon@gmail.com"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="last-name">Contact Number</label>
          <input
            type="text"
            className="border p-1 rounded-full px-2 max-w-[400px]"
            placeholder="09-123-123-123"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="last-name">Set your appointment schedule</label>
          <input
            type="date"
            className="border p-1 rounded-full px-2 max-w-[400px]"
            placeholder=""
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="last-name">Time</label>
          <input
            type="text"
            className="border p-1 rounded-full px-2 max-w-[400px]"
            placeholder="12:00"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="last-name">Select your doctor</label>
          <input
            type="text"
            className="border p-1 rounded-full px-2 max-w-[400px]"
            placeholder="Dr. Bruce Wayne"
          />
        </div>
        <Button
          label={"submit"}
          type={"primary"}
          className={"!w-[100px] relative left-72"}
        />
      </form>
    </div>
  );
};

export default RegisterForm;
