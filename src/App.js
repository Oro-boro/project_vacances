import "./App.css";
import Interface from "./components/interface-form/interface-form.component";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Interface} />
      </div>
    </BrowserRouter>
  );
}

export default App;
