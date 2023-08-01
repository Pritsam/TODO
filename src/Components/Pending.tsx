import { Card, ListGroup, Button, Stack } from "react-bootstrap";
import { AddTask } from "./AddTask";
import { useEffect, useState } from "react";
import { Task } from "../App";

export const Pending = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

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
            <Button onClick={() => onComplete(task.id)}>-</Button>
            <Button onClick={() => onRemove(task.id)}>x</Button>
          </Stack>
        </Stack>
      </ListGroup.Item>
    ))
  ) : (
    <ListGroup.Item> No Pending Tasks :)</ListGroup.Item>
  );

  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const onRemove = (taskID: number): void => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskID))
  }

  const onComplete=(taskID: number): void=>{
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskID))
  }

  useEffect(() => {
    // console.log("first use effect")
    const storedTasksString = localStorage.getItem('tasks');
    if (storedTasksString !== null) {
      const storedTasks: Task[] = JSON.parse(storedTasksString);
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    // console.log("second use effect")
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);


  return (
    <div className="ms-4">
      <Card className="mb-4" style={{ width: "18rem" }}>
        <Card.Header className="d-flex justify-content-center">
          Pending
        </Card.Header>
        <ListGroup variant="flush">{listData}</ListGroup>
      </Card>
      <div>
        <AddTask addTask={addTask} />
      </div>
    </div>
  );
};
