import { useState } from "react";
import Searchbar from "./phonebook/Searchbar";
import AddNewPerson from "./phonebook/AddNewPerson";
import Contacts from "./phonebook/Contacts";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", date: new Date().toISOString(), id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", date: new Date().toISOString(), id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", date: new Date().toISOString(), id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", date: new Date().toISOString(), id: 4 },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
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
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase().trim();
    setSearchTerm(value);
  };
  const filteredPerson = persons.filter((person) => person.name.toLowerCase().trim().includes(searchTerm));

  return (
    <div>
      <h2>Phonebook</h2>
      <Searchbar handleSearch={handleSearch} />
      <AddNewPerson handleSubmit={handleSubmit} handleChangeName={handleChangeName} handleChangeNumber={handleChangeNumber} />
      <Contacts filteredPerson={filteredPerson} />
    </div>
  );
};

export default App;
