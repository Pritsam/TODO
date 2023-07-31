import { FormEvent, useRef } from 'react'
import { Button, Col, Form, Row, Stack } from 'react-bootstrap'

type AddTaskProps = {
    addTask: (newTask: string) => void;
  };

export const AddTask = ({ addTask }: AddTaskProps) => {

    const taskRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: FormEvent) => {

        e.preventDefault();
        const newTask = taskRef.current!.value;
        addTask(newTask)
        taskRef.current!.value=''
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Stack direction="horizontal" className="d-flex justify-content-between">
                <Row>
                    <Col>
                        <Form.Group controlId="title">
                            <Form.Control required ref={taskRef} />
                        </Form.Group>
                    </Col>
                </Row>

                <Button onClick={handleSubmit}>Add</Button>

            </Stack>

        </Form>
    )
}