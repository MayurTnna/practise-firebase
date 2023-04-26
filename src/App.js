import "./App.css";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";

const db = getDatabase(app);
function App() {
  const putData = () => {
    set(ref(db, "users/mayur"), {
      id: 1,
      name: "mayur",
      age: 21,
    });
  };
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={putData}>Click</button>
    </div>
  );
}

export default App;
