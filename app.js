let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domains = ['.es', '.com', '.org'];

let domainGenerator = []

for(let i = 0; i < pronoun.length; i++) {
  for(let x = 0; x < adj.length; x++){
    for(let y = 0; y < noun.length; y++){
      for(let z = 0; z < domains.length; z++){
        domainGenerator.push(pronoun[i] + adj[x] + noun[y] + domains[z])
      }
    }
  }  
}

console.log(domainGenerator);
