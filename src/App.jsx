import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h2>Benvenuto alla Home Page di GihubUser Exercise!!</h2>
      <h4 className="p-3">
        Clicca il pulsante sottostante per visualizzare gli utenti <br /> ☟
      </h4>
      <Link
        className="text-warning bg-dark bg-gradient p-2 rounded"
        to="/users"
      >
        Go to User!
      </Link>
      <p className="p-3">
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </>
  );
}

export default App;
