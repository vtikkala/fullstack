import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
    }

    console.log(persons)
    console.log(nameObject)
  
    const testi = persons.some(person => person['name'] === nameObject.name)
    console.log(testi)

    if (testi) {
      alert(newName + ' on jo luettelossa')
    } else {
      setPersons(persons.concat(nameObject))
      setNewName('')
    }
    
  }

  const rows = () => persons.map(person =>
    <div>{person.name}</div>)

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)

    
   
  }

   return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addName}>
        <div>
          nimi: 
          <input 
          value={newName}
          onChange={handleNameChange}
          />  
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      <div>
        {rows()}
      </div>
    </div>
  )

}

export default App