/* eslint-disable react/prop-types */
const Button = ({ label, type, disable = false }) => {
  return (
    <button
      disabled={disable}
      className={` text-primary px-3 py-3 font-mazzard-bold w-full max-w-[500px] rounded-[49px] transition text-center  ${
        type === "primary"
          ? "bg-secondary hover:bg-primary hover:text-white transition disabled:bg-gray-300 disabled:text-white"
          : "bg-white border-2 border-secondary hover:text-primary hover:border-primary  disabled:text-gray-300 disabled:border-[1px] disabled:border-black"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
