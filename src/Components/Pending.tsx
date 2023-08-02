import { Card, ListGroup, Button, Stack } from "react-bootstrap";
import { AddTask } from "./AddTask";
import { Task } from "../App";
import { useSelector, useDispatch } from "react-redux";
import { addTask, completeTask, removeTask } from "../Store/taskSlice";
import { RootState } from "../Store/store";

export const Pending = () => {

  const dispatch = useDispatch();
  const tasks = useSelector((state:RootState) => state.task.tasks);

  console.log(tasks)

  
  const listData = tasks.length ? (
    tasks.map((task) => (
      <ListGroup.Item key={task.id}>
        <Stack
          direction="horizontal"
          className="d-flex justify-content-between"
        >
          {task.value}
          <Stack
            direction="horizontal"
            className="d-flex justify-content-end"
            gap={2}
          >
            <Button onClick={()=> onCompleteHandler(task)}>-</Button>
            <Button onClick={() => onRemoveHandler(task)}>x</Button>
          </Stack>
        </Stack>
      </ListGroup.Item>
    ))
  ) : (
    <ListGroup.Item> No Pending Tasks :)</ListGroup.Item>
  );

  const addTaskHandler = (newTask: Task): void => {
    dispatch(addTask(newTask))
  };

  const onRemoveHandler = (removedTask: Task): void => {
    dispatch(removeTask(removedTask))
  }

  const onCompleteHandler=(completedTask: Task): void =>{
      dispatch(completeTask(completedTask))
  }

  // const onComplete=(taskID: number): void=>{
  //   setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskID))
  // }

  // useEffect(() => {
  //   // console.log("first use effect")
  //   const storedTasksString = localStorage.getItem('tasks');
  //   if (storedTasksString !== null) {
  //     const storedTasks: Task[] = JSON.parse(storedTasksString);
  //     setTasks(storedTasks);
  //   }
  // }, []);

  // useEffect(() => {
  //   // console.log("second use effect")
  //   if (tasks.length > 0) {
  //     localStorage.setItem('tasks', JSON.stringify(tasks));
  //   }
  // }, [tasks]);


  return (
    <div className="ms-4">
      <Card className="mb-4" style={{ width: "18rem" }}>
        <Card.Header className="d-flex justify-content-center">
          Pending
        </Card.Header>
        <ListGroup variant="flush">{listData}</ListGroup>
      </Card>
      <div>
        <AddTask addTask={addTaskHandler} />
      </div>
    </div>
  );
};
