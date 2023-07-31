import { Card, ListGroup, Button, Stack, CloseButton } from "react-bootstrap";

export const Background = () => {
  const data = ["Book Tickets", "Go Shopping", "Attend meeting"];

  const listData = data.map((task) => (
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

  return (
    <div className="ms-4">
      <Card className="mb-4" style={{ width: "18rem" }}>
        <Card.Header className="d-flex justify-content-center">
          Pending
        </Card.Header>
        <ListGroup variant="flush">{listData}</ListGroup>
      </Card>
      <div className="d-flex justify-content-end">
        <Button>Add</Button>
      </div>
    </div>
  );
};
