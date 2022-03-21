import "../style/notelist.css";
const NoteList = ({ arr, deleteFn }) => {
  return (
    <>
      {arr.map((note) => {
        console.log(note.id);
        return (
          <div className="each-note" key={note.id}>
            <div className="each-title">
              <input className="noteTitle" type="text" value={note.title} />
              <button className="deleteBtn" onClick={() => deleteFn(note.id)}>
                Delete
              </button>
            </div>
            <br />
            <textarea
              className="note"
              type="text"
              value={note.note}
              rows="10"
              cols="50"
            ></textarea>
            <br />
            <br />
          </div>
        );
      })}
    </>
  );
};

export default NoteList;
