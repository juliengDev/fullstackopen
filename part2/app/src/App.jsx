import { useEffect, useState } from "react";
import Searchbar from "../../phonebook/Searchbar";
import AddNewPerson from "../../phonebook/AddNewPerson";
import Contacts from "../../phonebook/Contacts";
import personsService from "./services/note";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", date: new Date().toISOString(), id: 6364662 },
    { name: "Ada Lovelace", number: "39-44-5323523", date: new Date().toISOString(), id: 1145636 },
    { name: "Dan Abramov", number: "12-43-234345", date: new Date().toISOString(), id: 9409711 },
    { name: "Mary Poppendieck", number: "39-23-6423122", date: new Date().toISOString(), id: 8135745 },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  useEffect(function () {
    personsService.getAll().then((data) => setPersons(data));
  }, []);

  const isNameAlreadyExistLocally = (name) => {
    const nameInput = document.getElementById("name");
    const isExist = persons.filter((person) => person.name === name);
    nameInput.value = "";

    return isExist.length === 0 ? false : true;
  };
  // const isNameAlreadyExistOnServer = (newObj) => {
  //   const nameInput = document.getElementById("name");

  //   const person = personsService.getOnly(newObj.id).catch((error) => console.log(error));

  // };
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

    if (isNameAlreadyExistLocally(newName)) {
      alert(`${newName} is already added to local phonebook`);
      return;
    }

    const nameObj = {
      name: newName,
      date: new Date().toISOString(),
      number: newNumber,
      id: Math.floor(Math.random() * 10000000),
    };

    personsService.create(nameObj).then((returnPerson) => {
      setPersons(persons.concat(nameObj));
      setNewName("");
      setNewNumber("");
      nameInput.value = "";
      numberInput.value = "";
    });
  };

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase().trim();
    setSearchTerm(value);
  };
  const filteredPerson = persons.filter((person) => person.name.toLowerCase().trim().includes(searchTerm));

  const handleDelete = (id) => {
    const personFind = persons.find((person) => person.id === id);
    console.log(personFind);

    personsService
      .remove(personFind.id)
      .then((response) => {
        console.log(`utilisateur : ${personFind.name} - ${personFind.id} retirée`);
        const newPersons = persons.filter((p) => p.id !== personFind.id);
        setPersons(person.contact(newPersons));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Searchbar handleSearch={handleSearch} />
      <AddNewPerson handleSubmit={handleSubmit} handleChangeName={handleChangeName} handleChangeNumber={handleChangeNumber} />
      <Contacts filteredPerson={filteredPerson} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
