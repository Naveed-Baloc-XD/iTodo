const Button = ({ children, type, onCLick }) => {
  return (
    <button
      type={type}
      onClick={onCLick}
      className="bg-violet-700 py-[6px] px-6 text-white rounded-lg duration-200 border-2 border-violet-700 hover:bg-violet-800 hover:border-violet-900 active:scale-95"
    >
      {children}
    </button>
  );
};

export default Button;
