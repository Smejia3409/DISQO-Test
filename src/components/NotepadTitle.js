import { Link } from "react-router-dom";

const NotepadTitle = ({ title, setTitleFunction, deleteFn }) => {
  return (
    <div>
      <p>Notepad title</p>
      <input
        type="text"
        className="notepadTitle"
        placeholder="My notepad title..."
        value={title}
        onChange={setTitleFunction}
      />

      <div>
        <Link to="/stats">
          <button className="regularBtn">View Stats</button>
        </Link>
        <button>Save</button>
        <button className="deleteBtn" onClick={() => deleteFn()}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default NotepadTitle;
