fetch("sneakers.json")
    .then(response => response.json())
    .then(data => {
     console.log(data);
     console.log(data.entreprise.nomCommercial);
     data.entreprise.temoignages.forEach(element => {
      const temoignages = document.getElementById("temoignages");
      const div = document.createElement("div");
      temoignages.appendChild(div);
      const h3 = document.createElement("h3");
      h3.innerText =element.prenom;
      div.appendChild(h3);
      const p = document.createElement("p")
      temoignages.appendChild(p);
      p.innerText = element.typeExperience;
      const h1 = document.createElement("h1");
      temoignages.appendChild(h1);
      h1.innerText = element.commentaire;
    });
    })
    // .then(data => console.log(data))
// fetch("https://api.chucknorris.io/jokes/random?category=dev")
//     .then((response) => response.json())
//     .then(data => console.log(data))