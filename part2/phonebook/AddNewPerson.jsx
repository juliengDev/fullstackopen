function AddNewPerson({handleSubmit,handleChangeName,handleChangeNumber}) {
  return (
    <>
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
    </>
  );
}

export default AddNewPerson;
