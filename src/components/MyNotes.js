import { useState, useEffect } from "react";

const MyNotes = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [list, setList] = useState("");

  const preventDefault = (e) => {
    e.preventDefault();
    console.log("clicked");
    console.log(title, note);

    if (title && note) {
      const newNote = {
        title: title,
        note: note,
      };

      setList((e) => {
        return [...e, newNote];
      });

      setTitle("");
      setNote("");
      console.log(list);
    }
  };

  return (
    <>
      <p className="main-title">My notes</p>

      <form onSubmit={preventDefault}>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />

        <input
          type="text"
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <br />

        <button className="add-note" type="submit">
          Add note
        </button>
      </form>
    </>
  );
};

export default MyNotes;
