
import React, { useState, useEffect } from "react";
import FilterName from "./components/FilterName";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/personService";
import './index.css'
import Notification from "./components/Notification";


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [notification,setNotification] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then((response) => {
        setPersons(response.data);
        console.log("Fetching data");
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  

  const addName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    const existingPerson = persons.find(person => person.name === newName);
    if (existingPerson) {
      const confirmReplace = window.confirm(`${newName} is already added to the phonebook. Do you want to replace the existing number with the new one?`);
      if (confirmReplace) {
        const updatedPerson = { ...existingPerson, number: newNumber };
        personService.update(existingPerson.id, updatedPerson)
          .then(() => {
            setPersons(persons.map(person => person.id === existingPerson.id ? updatedPerson : person));
            console.log(`Successfully updated ${newName}'s number`);
            setNotification(`Successfully updated ${newName}'s number`)
            setTimeout(() =>{
              setNotification(null)
            },5000)
          })
          .catch(error => {
            console.error("Error updating contact", error);
            alert(`Error updating ${newName}'s number`);
          });
      }
    }

    personService
      .create(personObject)
      .then((response) => {
        setPersons(persons.concat(response.data));
        setNewName("");
        setNewNumber("");
        setNotification(`Succesfully added ${newName}`)
        setTimeout(() => {
          setNotification(null)
        }, 5000);
      })
      .catch((error) => {
        alert("ERROR ADDING A NEW CONTACT", error);
      });
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterName
        value={newFilter}
        onChange={(event) => setNewFilter(event.target.value)}
      />
      <PersonForm
        addName={addName}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <Persons persons={filteredPersons} setPersons={setPersons} />
    
    </div>
  );
};

export default App;
