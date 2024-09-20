import { useContext, useEffect, useState } from "react";
import TaskBody from "../../components/TaskBody.jsx";
import { TodoContext } from "../../context/TodoContext.jsx";

const Completed = () => {
  const { mainTask } = useContext(TodoContext);
  const [completedTasks, setCompletedTasks] = useState(mainTask);

  useEffect(() => {
    const completed = mainTask.filter((task) => task.isCompleted);
    setCompletedTasks(completed);
  }, [mainTask]);

  return (
    <main className="my-8">
      <TaskBody taskData={completedTasks} />
    </main>
  );
};

export default Completed;
