import "../style/notelist.css";
const NoteList = ({ arr, deleteFn, editNote }) => {
  return (
    <>
      {arr.map((note) => {
        console.log(note.id);
        console.log(arr.length);
        const index = arr.length - 1;

        return (
          <div className="each-note" key={note.id}>
            <div className="each-title">
              <input
                className="noteTitle"
                type="text"
                value={note.title}
                onChange={(e) => editNote(index, e.target.value, "title")}
              />
              <button className="deleteBtn" onClick={() => deleteFn(note.id)}>
                Delete
              </button>
            </div>
            <br />
            <textarea
              className="note"
              type="text"
              value={note.note}
              // onChange={(e) => editNote(index, e.target.value, "note")}

              onChange={(e) => console.log(e.target.value)}
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
