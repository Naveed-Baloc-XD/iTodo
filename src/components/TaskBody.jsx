import { FiXOctagon } from "react-icons/fi";
import { BiSolidEditAlt } from "react-icons/bi";
import { BiSolidCopy } from "react-icons/bi";
import { CgCheckO } from "react-icons/cg";
import { TiArrowRightOutline } from "react-icons/ti";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import Link from "./Link";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Dellbtn from "./Dellbtn";
import { div } from "framer-motion/client";
const list = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.01,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const TaskBody = ({ taskData }) => {
  const { setTask, mainTask, setmainTask } = useContext(TodoContext);
  const { pathname } = useLocation();
  const [tab, setTab] = useState(pathname);
  /////////////////////////// DELETE Task 🖤
  const deleteHandler = (index) => {
    const updatedTask = mainTask.filter((t) => {
      return index !== t.id;
    });
    setmainTask(updatedTask);
    toast.success("Task removed ...");
  };
  /////////////////////////// Edit Task 🖤
  const editTask = (id) => {
    let newEditTask = mainTask.find((t) => t.id === id);
    setTask(newEditTask.task);
    const updatedTask = mainTask.filter((t) => id !== t.id);
    setmainTask(updatedTask);
    toast.success("Editing the task...");
  };

  /////////////////////////// Complete Task 🖤
  const handleComplete = (id) => {
    const taskToComplete = mainTask.find((t) => t.id === id);
    const updatedTask = {
      ...taskToComplete,
      isCompleted: true,
    };
    setmainTask(mainTask.map((t) => (t.id === id ? updatedTask : t)));
    toast.success("Task completed successfully ...");
  };

  /////////////////////////// Copy Task 🖤
  const copyTask = (task) => {
    navigator.clipboard.writeText(task).then(() => {
      toast.success("Copied to clipboard...");
    });
  };

  const icons_classes_common =
    "cursor-pointer w-[18px] h-[18px] text-violet-700 duration-200 active:scale-95";

  return (
    <>
      <nav className="sm:text-[18px] text-[16px] sm:my-3 mb-3 sm:mb-0 sm:-mt-0 -mt-3 px-3 font-sans text-violet-700 tracking-tight flex justify-between items-center sm:flex-row flex-col-reverse sm:gap-8 gap-4">
        <div className=" font-bold flex  justify-center sm:gap-10">
          <Link to="/add" tab={tab} setTab={setTab}>
            Added Tasks
          </Link>
          <Link to="/completed" tab={tab} setTab={setTab}>
            Completed Tasks
          </Link>
        </div>
        <div>
          <Dellbtn type="delete">Delete All</Dellbtn>
        </div>
      </nav>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={list}
        className="py-8 sm:mt-8 px-3 bg-slate-200 rounded-md"
      >
        {taskData.length > 0 ? (
          taskData.map((t, ind) => {
            return (
              <motion.li
                key={ind}
                variants={item}
                className="container bg-violet-200 mb-2 flex sm:justify-start  sm:flex-row flex-col items-center py-2 rounded-md gap-2"
              >
                <div className="flex items-center -ml-12 sm:-ml-0 w-[75%] ">
                  <div className=" sm:w-[10%] flex items-center justify-center">
                    <h3 className="font-semibold ">{ind + 1}</h3>
                    <TiArrowRightOutline className="cursor-pointer  w-[16px] h-[22px] mt-[2px] mx-[6px] text-violet-700" />
                  </div>
                  <div>
                    <h4 className="w-[80%] inline text-wrap">{t.task}</h4>
                  </div>
                </div>
                <div className="bg-violet-500 block sm:hidden w-[100%] h-[0.5px]"></div>
                {t.isCompleted ? (
                  <div className="flex items-center gap-2 sm:w-[25%]">
                    <span className="text-green-700 font-semibold text-sm">
                      Completed
                    </span>
                    <FiXOctagon
                      onClick={() => deleteHandler(t.id)}
                      className={`hover:text-green-800 ${icons_classes_common}`}
                    />
                    <BiSolidCopy
                      onClick={() => copyTask(t.task)}
                      className={`hover:text-green-600 w-[20px] ${icons_classes_common}`}
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-2 sm:w-[25%">
                    <FiXOctagon
                      onClick={() => deleteHandler(t.id)}
                      className={`hover:text-red-600 ${icons_classes_common}`}
                    />
                    <BiSolidEditAlt
                      onClick={() => editTask(t.id)}
                      className={`hover:text-yellow-600 ${icons_classes_common}`}
                    />
                    <CgCheckO
                      onClick={() => handleComplete(t.id)}
                      className={`hover:text-green-600 ${icons_classes_common}`}
                    />
                    <BiSolidCopy
                      onClick={() => copyTask(t.task)}
                      className={`hover:text-orange-600 ${icons_classes_common}`}
                    />
                  </div>
                )}
              </motion.li>
            );
          })
        ) : (
          <h2 className="text-center text-violet-700">No Task to show...</h2>
        )}
      </motion.ul>
    </>
  );
};
export default TaskBody;
