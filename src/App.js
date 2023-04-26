import "./App.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import Signup from "./pages/Signup";

const auth = getAuth(app);
function App() {
  const signupUser = () => {
    createUserWithEmailAndPassword(auth, "jon.snow@gmail.com", "Jon@1234").then(
      (value) => console.log(value)
    );
  };
  return (
    <div className="App">
      {/* <h1>Hello</h1>
      <button onClick={signupUser}>create user</button> */}
      <Signup/>
    </div>
  );
}

export default App;
