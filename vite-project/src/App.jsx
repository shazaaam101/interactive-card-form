import { useReducer } from "react";
import "./App.css";
import { CardContext } from "./CardContext";
import Card from "./components/Card";
import Form from "./components/Form";
import { INIT_STATE, reducer } from "./cardReducer";

function App() {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  return (
    <div className="App">
      <CardContext.Provider value={{ state, dispatch }}>
        <Card />
        <Form />
      </CardContext.Provider>
    </div>
  );
}

export default App;
