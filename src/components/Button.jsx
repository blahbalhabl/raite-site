/* eslint-disable react/prop-types */
const Button = ({ label, type, disable = false, handleClick, className }) => {
  return (
    <button
      onClick={handleClick}
      disabled={disable}
      className={` text-primary px-3 py-3 font-mazzard-bold w-full max-w-[500px] rounded-[49px] transition text-center  ${
        type === "primary"
          ? "bg-secondary hover:bg-primary hover:text-white transition disabled:bg-gray-300 disabled:text-white"
          : "border-2 border-black hover:text-primary hover:border-primary  disabled:text-gray-300 disabled:border-[1px] disabled:border-black"
      } ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
