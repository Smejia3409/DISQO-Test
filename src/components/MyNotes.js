import { useState } from "react";
import "../style/mynote.css";
import NoteList from "./NoteList";

const MyNotes = () => {
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

  const deleteNote = (id) => {
    const removeNote = list.filter((list) => list.id !== id);
    setList(removeNote);
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
          placeholder="Enter note title..."
        />
        <br />

        <input
          type="text"
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter note..."
        />
        <br />
        <br />

        <button className="add-note" type="submit">
          Add note
        </button>
      </form>

      <br />
      <br />

      <NoteList arr={list} deleteFn={deleteNote} />
    </>
  );
};

export default MyNotes;
