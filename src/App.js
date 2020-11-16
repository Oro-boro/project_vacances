import "./App.css";
import InterfaceForm from "./components/interface-form/interface-form.component";
import InterfaceResult from "./components/interface-result/interface-result.component";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={InterfaceForm} />
        <Route path="/" component={InterfaceResult} />
      </div>
    </BrowserRouter>
  );
}

export default App;
