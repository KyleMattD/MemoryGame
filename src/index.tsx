import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route, 
  Routes,
} from "react-router-dom";
import App from "./App";
import GameScreen from "./screens/GameScreen";
import WinnersScreen from "./screens/WinnersScreen";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Games" element={<GameScreen name name1 />} />
      <Route path="/Winner" element={<WinnersScreen name name1 points/>} />
    </Routes>
  </Router>,
  rootElement
);

reportWebVitals();
