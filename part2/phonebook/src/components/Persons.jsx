import React from 'react'
import personService from '../services/personService';


 const Persons = ({persons, setPersons}) => {
  const handleDelete = (id,name) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${name}`)
    if(confirmDelete){
      personService
      .deletePerson(id)
      .then(() =>{
        setPersons(persons.filter(person => person.id !== id))
        console.log(`Succesfully deleted ${name}`);
      })
      .catch(error =>{
        console.log('Error deleting contact', error);
        alert(`Error deleting ${name}`);
      })
    }
  }
  return (
    <div>
         <h2>Numbers</h2>
     
     {persons.map((person, index) =>(
       <p key={index}>
         {person.name} {person.number} 
         <button onClick={() => handleDelete(person.id, person.name)}>Delete</button>
       </p>
     ))}


    </div>
  )
}


export default Persons