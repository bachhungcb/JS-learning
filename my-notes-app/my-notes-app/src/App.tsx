import "./App.css";
import { useState } from "react";


interface Note {
  id: number;
  title: string;
  content: string;
}


const App = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "Note 1",
      content: "hahahah",
    },
    {
      id: 2,
      title: "Note 2",
      content: "Content 2",
    },
    {
      id: 3,
      title: "Note 3",
      content: "Content 3",
    },
    {
      id: 4,
      title: "Note 4",
      content: "Content 4",
    },
  ]);

  const handleAddNote = (event: React.FormEvent) => {
    event.preventDefault();
    setNotes([newNote, ...notes]);
    setTitle("");
    setContent("");
  }

  const newNote: Note = {
    id: notes.length +1,
    title: title, 
    content: content,
  };

  const  [selectedNote, setSelectedNote] = useState<Note | null >(null);
  const handleNoteClick = (note: Note) =>{
    setSelectedNote(note);
    setTitle(note.title);
    setContent(note.content);
  }

  const handleUpdateNote = (event: React.FormEvent) =>{
    event.preventDefault();

    if(!selectedNote){
      return;
    }

    const updateNote: Note = {
      id: selectedNote.id,
      title: title,
      content: content,
    };

    const updatedNotesList = notes.map((note) => (note.id === selectedNote.id ? updateNote: note))

    setNotes(updatedNotesList);
    setTitle("");
    setContent("");
    setSelectedNote(null);
  }


  return (
    <div className="app-container">
      <form onSubmit={handleAddNote} className="note-form">
        <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}        
            placeholder="Title" 
            required>
        </input>
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Content" 
          rows={10} required>
        </textarea>

        <button type="submit">Add Note</button>
      </form>
      <div className="notes-grid">
        {notes.map((note) => (
          <div key={note.id} className="note-item" onClick={() => handleNoteClick(note)}>
            <div className="notes-header">
              <button>x</button>
            </div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;