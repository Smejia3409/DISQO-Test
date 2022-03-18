import "./style/app.css";
import MyNotes from "./components/MyNotes";

const App = () => {
  return (
    <div className="container">
      <p className="main-title">Notepad application</p>
      <div className="notepad">
        <MyNotes />
      </div>
    </div>
  );
};

export default App;
