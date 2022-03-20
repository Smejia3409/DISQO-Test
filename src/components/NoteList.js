import "../style/notelist.css";
const NoteList = ({ arr, deleteFn }) => {
  return (
    <>
      {arr.map((note) => {
        console.log(note.id);
        return (
          <div className="each-note" key={note.id}>
            <div className="each-title">
              <input type="text" value={note.title} />
              <button onClick={() => deleteFn(note.id)}>Delete</button>
            </div>
            <br />
            <input type="text" value={note.note} />
            <br />
            <br />
          </div>
        );
      })}
    </>
  );
};

export default NoteList;
