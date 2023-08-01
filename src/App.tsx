import "bootstrap/dist/css/bootstrap.min.css";
import { Pending } from "./Components/Pending";
import { Header } from "./Components/Header";
import { Completed } from "./Components/Completed";
import { Stack } from "react-bootstrap";

export type Task = {
  id: number;
  value: string;
};

function App() {
  return (
    <div>
      <Header />
      <Stack className="justify-content-evenly" direction="horizontal">
        <Pending />
        <Completed />
      </Stack>
    </div>
  );
}

export default App;
