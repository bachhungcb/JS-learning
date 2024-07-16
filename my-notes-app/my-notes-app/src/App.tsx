import "./App.css";
import { useEffect, useState } from "react";


interface Note {
  Id: number;
  Title: string;  // phai match voi DB
  Content: string;// phai match voi DB
}


const App = () => {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");

  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {

    const fetchNotes = async() =>{
      try{
        const response = await fetch("http://localhost:5000/api/notes"); //lay data tu BE
        const notes: Note[] = await response.json();
        setNotes(notes);
      }catch(err){
        console.log(err);
      }
    }

    fetchNotes();
  },[]); //Lastly, add an empty dependency array 
         //to ensure that this code only runs once when 
         //the component is first mounted:
  


  const handleAddNote = async (event: React.FormEvent) => {

    try{
      event.preventDefault();
      const response = await fetch(
        "http://localhost:5000/api/notes",
        {
          method:"POST",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            Title,
            Content,
          }),
        }
      );
      
      const newNote = await response.json();
      setNotes([...notes, newNote]);
      setTitle("");
      setContent("");
    }catch(err){
      console.log(err);
    }
  }

  const  [selectedNote, setSelectedNote] = useState<Note | null >(null);
  const handleNoteClick = (note: Note) =>{
    console.log(note.Id);
    setSelectedNote(note);
    setTitle(note.Title);
    setContent(note.Content);
  }

  const handleUpdateNote = (event: React.FormEvent) =>{
    event.preventDefault();

    if(!selectedNote){
      return;
    }

    const updateNote: Note = {
      Id: selectedNote.Id,
      Title: Title,
      Content: Content,
    };

    const updatedNotesList = notes.map((note) => (note.Id === selectedNote.Id ? updateNote: note))

    setNotes(updatedNotesList);
    setTitle("");
    setContent("");
    setSelectedNote(null);
  }

  const handleCancel = () =>{
    setTitle("");
    setContent("");
    setSelectedNote(null);
  }

  const deleteNote = async (
    event: React.MouseEvent,
    noteId: number
  ) => {
    event.stopPropagation();

    try {
      await fetch(
        `http://localhost:5000/api/notes/${noteId}`,
        {
          method: "DELETE",
        }
      );
      console.log(noteId);
      const updatedNotes = notes.filter(
        (note) => note.Id !== noteId
      );

      setNotes(updatedNotes);
    } catch (e) {
      console.log(e);
    }
  };


  
  return (
    <div className="app-container">
      <form onSubmit={(event) => 
                      {selectedNote? handleUpdateNote(event) : handleAddNote(event)}}
            className="note-form">
        <input
            value={Title}
            onChange={(event) => setTitle(event.target.value)}        
            placeholder="Title" 
            required>
        </input>
        <textarea
          value={Content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Content" 
          rows={10} required>
        </textarea>

        {selectedNote ? (
          <div className="edit-button">
            <button type="submit">Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <button type="submit">Add Note</button>
        )}
      </form>
      <div className="notes-grid">
        {notes.map((note) => (
          <div key={note.Id} className="note-item" onClick={() => handleNoteClick(note)}>
            <div className="notes-header">
              <button onClick={(event)=>deleteNote(event, note.Id)}>x</button>
            </div>
            <h2>{note.Title}</h2>
            <p>{note.Content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;