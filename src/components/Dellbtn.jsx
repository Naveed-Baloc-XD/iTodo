import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
const Dellbtn = ({ children, type, taskData }) => {
  const { setmainTask } = useContext(TodoContext);
  const deleteAll = () => {
    setmainTask([]);
  };
  return (
    <button
      type={type}
      onClick={() => deleteAll()}
      className="bg-violet-700 py-[4px] px-3 text-white rounded-lg duration-200 border-2 border-violet-700 hover:bg-violet-900 hover:border-violet-900 active:scale-95"
    >
      {children}
    </button>
  );
};

export default Dellbtn;
