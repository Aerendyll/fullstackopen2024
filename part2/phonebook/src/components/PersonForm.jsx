import React from "react";

const PersonForm = ({
  addName,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
}) => {
  return (
    <div>
      <h2>ADD NEW ➡️</h2>
      <form onSubmit={addName}>
        <div>
          Name:
          <input
            value={newName}
            onChange={(event) => {
              // Verifica que newName se esté actualizando correctamente
              setNewName(event.target.value);
            }}
          />
        </div>
        <div>
          Number:
          <input
            value={newNumber}
            onChange={(event) => {
              // Verifica que newNumber se esté actualizando correctamente
              setNewNumber(event.target.value);
            }}
          />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
