import React from "react";
import notes from "../notes.js";
import Create from "./Create.jsx";

function createNote(note) {
  return <Create key={note.key} title={note.title} content={note.content} />;
}

function Note() {
  return <div>{notes.map(createNote)}</div>;
}

export default Note;
