import "bootstrap/dist/css/bootstrap.min.css";
import { Background } from "./Components/Background";
import { Header } from "./Components/Header";
import { BackgroundC } from "./Components/BackgroundC";
import { Stack } from "react-bootstrap";

export type NewTask = {
  id: number;
  value: string;
};

function App() {
  return (
    <div>
      <Header />
      <Stack className="justify-content-evenly" direction="horizontal">
        <Background />
        <BackgroundC />
      </Stack>
    </div>
  );
}

export default App;
