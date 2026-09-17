import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", date: new Date().toISOString(), id: 1 }]);
  const [newName, setNewName] = useState("");

  const isNameAlreadyExist = (name) => {
    const nameInput = document.getElementById("name");
    const isExist = persons.filter((person) => person.name === name);
    nameInput.value = "";

    return isExist.length === 0 ? false : true;
  };

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleSubmit = (event) => {
    const nameInput = document.getElementById("name");

    event.preventDefault();

    if (isNameAlreadyExist(newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const nameObj = {
      name: newName,
      date: new Date().toISOString(),
      id: persons.length + 1,
    };

    setPersons(persons.concat(nameObj));
    setNewName("");
    nameInput.value = "";
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name: </label>
          <input type="text" id="name" name="person_name" onChange={handleChangeName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.id}>{person.name}</div>
      ))}
    </div>
  );
};

export default App;
