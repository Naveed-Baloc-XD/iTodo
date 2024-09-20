import TaskBody from "../../components/TaskBody";
import Button from "../../components/Button";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../context/TodoContext";

const Add = () => {
  const { task, setTask, setmainTask, mainTask } = useContext(TodoContext);
  const [pendingTasks, setPendingTasks] = useState(mainTask);

  useEffect(() => {
    const pending = mainTask.filter((t) => !t.isCompleted);
    setPendingTasks(pending);
  }, [mainTask]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { id: uuidv4(), task, isCompleted: false }]);
    setTask("");
    toast.success("New task added...");
  };

  return (
    <main className="w-[100%] sm:my-4 mt-1">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="w-[100%] py-5 flex items-center justify-center sm:flex-row flex-col sm:gap-1 gap-2"
      >
        <input
          type="text"
          className="py-2 w-[100%] transition-all duration-200 px-3 border border-violet-600 hover:border-violet-600 outline-none focus:border-violet-950 rounded-xl"
          placeholder="Enter Task here ... 🖤"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <div className="flex items-center gap-1">
          <Button type="submit">Add</Button>
          <Button type="reset" onCLick={() => setTask("")}>
            Clear
          </Button>
        </div>
      </form>
      <TaskBody taskData={pendingTasks} />
    </main>
  );
};

export default Add;
