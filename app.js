let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domains = ['.es', '.com', '.org', 'domainHack']; // domainHack nos permite identificar cuando debemos ejecutar la lógica del dominio

let domainGenerator = [];

for (let i = 0; i < pronoun.length; i++) {
  for (let x = 0; x < adj.length; x++) {
    for (let y = 0; y < noun.length; y++) {
      for (let z = 0; z < domains.length; z++) {
        if (domains[z] === 'domainHack') { //verificamos si el dominio es domainHack para ejecutar la lógica
          domainGenerator.push(
            pronoun[i] + adj[x] + noun[y].slice(0, -2) + '.' + noun[y].slice(-2) // aplicamos los cortes necesarios con .slice para crear la extensión de dominio nueva
          );
        } else {
          domainGenerator.push(pronoun[i] + adj[x] + noun[y] + domains[z]);
        }
      }
    }
  }
}

console.log(domainGenerator);
