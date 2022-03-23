import { useEffect, useState } from "react";
import "../style/mynote.css";
import NoteList from "./NoteList";
import NotepadTitle from "./NotepadTitle";

const MyNotes = () => {
  const [notepadTitle, setNotepadTitle] = useState("");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [list, setList] = useState([]);
  const [ls, setLs] = useState();

  const token = "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";
  let s = JSON.parse(localStorage.getItem(token).toString());

  const preventDefault = (e) => {
    e.preventDefault();

    try {
      //if inputs are not empty creates adds note to list
      if (title.trim() !== "" && note.trim() !== "") {
        //creates note object
        const newNote = {
          id: new Date().getTime().toString(),
          title: title,
          note: note,
        };

        //adds new note to list
        setList((e) => {
          return [...e, newNote];
        });

        setLs({ title: notepadTitle, list: list });
        localStorage.setItem(
          token,
          JSON.stringify({ title: title, list: list })
        );

        //clears title and note state after note is added
        setTitle("");
        setNote("");
        const storage = localStorage.getItem(token);
        console.log(localStorage.getItem(token));
      }
    } catch (error) {
      console.log(error);
      console.log("note is blank");
    }
  };

  const npTitle = (e) => {
    setNotepadTitle(e.target.value);
  };

  const editNote = (index, newValue, area) => {
    //saves the current list to new variable
    let newList = [...list];
    //change specific field in list

    if (area === "title") {
      newList[index].title = newValue;
    } else {
      newList[index].note = newValue;
    }
    setList(newList);
  };

  //delete note from list
  const deleteNote = (id) => {
    const removeNote = list.filter((list) => list.id !== id);
    setList(removeNote);
  };

  //erases whole note pad
  const deleteNotePad = () => {
    //clears note list and notepad title
    setList([]);
    setNotepadTitle("");
  };

  // useEffect(() => {
  //   if (localStorage.getItem(token)) {
  //     setList(s.list);
  //     setNotepadTitle(s.title);
  //   }
  // }, [s, list, notepadTitle]);

  return (
    <div className="myNotes">
      <NotepadTitle
        title={notepadTitle}
        setTitleFunction={npTitle}
        deleteFn={deleteNotePad}
        editNote={editNote}
      />

      <p className="my-note-title">My Notes</p>
      <form onSubmit={preventDefault}>
        <input
          type="text"
          className="noteTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter note title..."
          maxLength="255"
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
          maxLength="1000"
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
