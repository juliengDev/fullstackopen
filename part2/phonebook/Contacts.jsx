function Contacts({ filteredPerson }) {
  return (
    <>
      <h2>Numbers</h2>
      {filteredPerson.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
        </div>
      ))}
    </>
  );
}

export default Contacts;
