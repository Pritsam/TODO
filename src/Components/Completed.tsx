import { Card, ListGroup, Button } from "react-bootstrap";

export const Completed = () => {

  return (
    <div className="ms-4">
      <Card className="mb-4" style={{ width: "18rem" }}>
        <Card.Header className="d-flex justify-content-center">
          Completed
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card>
      <div className="d-flex justify-content-end">
        <Button>Add</Button>
      </div>
    </div>
  );
};
