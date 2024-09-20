import { createContext } from "react";
import { useEffect, useState } from "react";

export const TodoContext = createContext();

export const ContextProvider = ({ children }) => {
  const [task, setTask] = useState("");
  const [mainTask, setmainTask] = useState(() => {
    const savedTask = localStorage.getItem("mainTask");
    return savedTask ? JSON.parse(savedTask) : [];
  });
  useEffect(() => {
    localStorage.setItem("mainTask", JSON.stringify(mainTask));
  }, [mainTask]);

  return (
    <TodoContext.Provider value={{ task, setTask, mainTask, setmainTask }}>
      {children}
    </TodoContext.Provider>
  );
};
