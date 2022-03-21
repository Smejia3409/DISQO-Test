import { useState } from "react";
import "../style/mynote.css";
import NoteList from "./NoteList";
import NotepadTitle from "./NotepadTitle";

const MyNotes = () => {
  const [notepadTitle, setNotepadTitle] = useState("");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [list, setList] = useState([]);

  const preventDefault = (e) => {
    e.preventDefault();
    console.log("clicked");

    try {
      if (title !== "" && note !== "") {
        const newNote = {
          id: new Date().getTime().toString(),
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
    } catch (error) {
      console.log(error);
      console.log("note is blank");
    }
  };

  const npTitle = (e) => {
    setNotepadTitle(e.target.value);
  };

  const deleteNote = (id) => {
    const removeNote = list.filter((list) => list.id !== id);
    setList(removeNote);
  };

  const deleteNotePad = () => {
    setList([]);
    setNotepadTitle("");
  };

  return (
    <div className="myNotes">
      <NotepadTitle
        title={notepadTitle}
        setTitleFunction={npTitle}
        deleteFn={deleteNotePad}
      />

      <p className="main-title">My notes</p>
      <form onSubmit={preventDefault}>
        <input
          type="text"
          className="noteTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter note title..."
        />
        <br />
        <br />

        <textarea
          type="text"
          id="note"
          className="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter note..."
          rows="10"
          cols="50"
        ></textarea>

        <br />
        <br />

        <button className="add-note" type="submit">
          Add note
        </button>
      </form>

      <br />
      <br />

      <NoteList arr={list} deleteFn={deleteNote} />
    </div>
  );
};

export default MyNotes;
