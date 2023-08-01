import { Card, ListGroup, Button, Stack } from "react-bootstrap";
import { AddTask } from "./AddTask";
import { useEffect, useState } from "react";
import { NewTask } from "../App";

export const Background = () => {
  const [tasks, setTasks] = useState<NewTask[]>([]);

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
            <Button>-</Button>
            <Button>x</Button>
          </Stack>
        </Stack>
      </ListGroup.Item>
    ))
  ) : (
    <ListGroup.Item> No Pending Tasks :)</ListGroup.Item>
  );

  const addTask = (newTask: NewTask) => {
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    console.log("first use effect")
    const storedTasksString = localStorage.getItem('tasks');
    if (storedTasksString !== null) {
      const storedTasks: NewTask[] = JSON.parse(storedTasksString);
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    console.log("second use effect")
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
