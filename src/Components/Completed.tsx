import { Card, ListGroup, Button } from "react-bootstrap";
import { RootState } from "../Store/store";
import { useSelector, useDispatch } from "react-redux";
import { clearCompletedTask } from "../Store/taskSlice";

export const Completed = () => {

  const dispatch = useDispatch()
  const completedTasks = useSelector((state: RootState) => state.task.completedTasks)

  const listCompletedTasks = completedTasks.length ? (
    completedTasks.map((task) => (
      <ListGroup.Item key={task.id}>{task.value}</ListGroup.Item>))
  ) : (
    <ListGroup.Item> No Completed Tasks :(</ListGroup.Item>
  );

  const onClearHandler = () => {
    dispatch(clearCompletedTask())
  }

  return (
    <div className="ms-4">
      <Card className="mb-4" style={{ width: "18rem" }}>
        <Card.Header className="d-flex justify-content-center">
          Completed
        </Card.Header>
        <ListGroup variant="flush">
          {listCompletedTasks}
        </ListGroup>
      </Card>
      <div className="d-flex justify-content-end">
        <Button onClick={onClearHandler}>Clear</Button>
      </div>
    </div>
  );
};
