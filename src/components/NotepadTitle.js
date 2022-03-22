import { Link } from "react-router-dom";
import "../style/notepadtitle.css";

const NotepadTitle = ({ title, setTitleFunction, deleteFn }) => {
  return (
    <>
      <p>Notepad title</p>

      <div className="npTitleComp">
        <input
          type="text"
          className="notepadTitle"
          placeholder="My notepad title..."
          value={title}
          onChange={setTitleFunction}
        />

        <div className="npBtn">
          <Link to="/stats">
            <button className="regularBtn">View Stats</button>
          </Link>
          <button className="saveBtn">Save</button>
          <button className="deleteBtn" onClick={() => deleteFn()}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default NotepadTitle;
