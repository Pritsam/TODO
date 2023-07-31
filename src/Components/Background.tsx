import { Card, ListGroup, Button, Stack } from "react-bootstrap";
import { AddTask } from "./AddTask";
import { useState } from "react";

export const Background = () => {
  const data = [];

  const [tasks, setTasks] = useState<string[]>(["Book Tickets", "Go Shopping", "Attend meeting"])

  const listData = tasks.map((task) => (
    <ListGroup.Item>
      <Stack direction="horizontal" className="d-flex justify-content-between">
        {task}
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
  ));

  const addTask = (newTask: string) => {
    setTasks([...tasks, newTask])
  }


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
