import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  console.log(notes);

  useEffect(() => {
    console.log("effect");
    axios
      .get("http://localhost:3002/persons")
      .then((response) => {
        console.log("promise fulfilled");
        setNotes(response.data);
      })
      .catch((e) => console.error(e));
  }, []);
};

export default App;
