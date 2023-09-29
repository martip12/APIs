
fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    data.results.forEach(character => {
        console.log("Name:", character.name);
        console.log("It is:", character.status);
        console.log("The spicie is:", character.species);
        console.log()
    });
  })
  .catch(error => {
    console.error('Error al realizar la conexión:', error);
  });
