import { FormEvent, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { NewTask } from "../App";

type AddTaskProps = {
  addTask: (newTask: NewTask) => void;
};

export const AddTask = ({ addTask }: AddTaskProps) => {
  const [taskValue, setTaskValue] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (taskValue!.trim() !== "") {
      const newTask = {
        id: Date.now(),
        value: taskValue,
      };
      addTask(newTask);
      setTaskValue("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskValue(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Stack direction="horizontal" className="d-flex justify-content-between">
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Control
                required
                value={taskValue}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button onClick={handleSubmit} disabled={!taskValue}>
          Add
        </Button>
      </Stack>
    </Form>
  );
};
