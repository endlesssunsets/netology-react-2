import "./App.css";
import Portfolio from "./components/Portfolio";
import projects from "./projects";

export default function App() {
  return <Portfolio projects={projects} />;
}
