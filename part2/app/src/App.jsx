// import { useState } from "react";
// import Note from "./components/Note";

// const App = (props) => {
//   const [notes, setNotes] = useState(props.notes);
//   const [newNote, setNewNote] = useState("");
//   const [showAll, setShowAll] = useState(true);

//   const notesToShow = showAll ? notes : notes.filter((note) => note.important);

//   const addNote = (event) => {
//     event.preventDefault();
//     const noteObject = {
//       content: newNote,
//       date: new Date().toISOString(),
//       important: Math.random() < 0.5,
//       id: notes.length + 1,
//     };
//     setNotes(notes.concat(noteObject));
//     setNewNote("");
//   };
//   const handleNoteChange = (event) => {
//     setNewNote(event.target.value);
//   };

//   return (
//     <div>
//       <h1>Notes</h1>
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>show {showAll ? "important" : "all"}</button>
//       </div>
//       <ul>
//         {notesToShow.map((note) => (
//           <Note key={note.id} note={note} />
//         ))}
//       </ul>
//       <form onSubmit={addNote}>
//         <input value={newNote} onChange={handleNoteChange} />
//         <button type="submit">save</button>
//       </form>
//     </div>
//   );
// };

// export default App;

import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", date: new Date().toISOString(), id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", date: new Date().toISOString(), id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", date: new Date().toISOString(), id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", date: new Date().toISOString(), id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const isNameAlreadyExist = (name) => {
    const nameInput = document.getElementById("name");
    const isExist = persons.filter((person) => person.name === name);
    nameInput.value = "";

    return isExist.length === 0 ? false : true;
  };

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };
  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const numberInput = document.getElementById("number");

    if (isNameAlreadyExist(newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const nameObj = {
      name: newName,
      date: new Date().toISOString(),
      number: newNumber,
      id: persons.length + 1,
    };

    setPersons(persons.concat(nameObj));
    setNewName("");
    setNewNumber("");
    nameInput.value = "";
    numberInput.value = "";
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <label htmlFor="search">filter shown with</label>
        <input type="text" />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="person_name" onChange={handleChangeName} />
        </div>
        <div>
          <label htmlFor="number">Number: </label>
          <input type="tel" id="number" name="person_number" onChange={handleChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default App;
