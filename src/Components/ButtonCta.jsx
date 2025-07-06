const ButtonCta = ({ children, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      className={`flex justify-center  h-full items-center  gap-2 px-6 py-4 text-sm rounded-lg cursor-pointer lg:text-lg bg-red-45 text-absolute-white ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonCta;
