const apiUrl = "https://api.spotify.com/v1/";

const artiestNaam = document.querySelector("#artiest");

const embed = document.querySelector("#test");

const artiest1 = document.querySelector(".artiest1");
const artiest2 = document.querySelector(".artiest2");

let artiestenLijstItems = document.querySelectorAll(".artiestListItems li");

let artiestDiv = document.querySelector(".artiestList");

let artiestNieuw = document.querySelector(".nieuweArtiestKnop");
let nummerNieuw = document.querySelector(".nieuwNummerKnop");

let artiestKiesTekst = document.querySelector(".artiestKiesTekst");

const artiestenIds = [
  "3TVXtAsR1Inumwj472S9r4?si=leWwHjOZRW-mTRSzUUO9dg",
  "699OTQXzgjhIYAHMy9RyPD?si=gCC2aIggT46lHjF8RcKQBg",
  "3Rq3YOF9YG9YfCWD4D56RZ?si=bt1w9rK5QD6NgABY4Q_Jhg",
];

const nujabesNummers = [
  '<iframe src="https://open.spotify.com/embed/track/6SNGzhVrisdq63Ndz58ovT" width="700" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
  '<iframe src="https://open.spotify.com/embed/track/0JL9TZip7mL7iwC5EOkALS" width="700" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
  '<iframe src="https://open.spotify.com/embed/track/4xlpJ99yL9xYQtzG6c3hwk" width="700" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
  '<iframe src="https://open.spotify.com/embed/track/2ej1A2Ze6P2EOW7KfIosZR" width="700" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
  '<iframe src="https://open.spotify.com/embed/track/16wGHOPaWoat5rkAZkixxk" width="700" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
  '<iframe src="https://open.spotify.com/embed/track/0fbnqrpTlUdy0PUwMdU8Pl" width="700" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
  '<iframe src="https://open.spotify.com/embed/track/4x7z7PwjRpbtFNKXihsHRr" width="700" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
  '<iframe src="https://open.spotify.com/embed/track/72LSGNDLY4sdvyrGIKtd2Q" width="700" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
  '<iframe src="https://open.spotify.com/embed/track/6norVbAE14clVMEyDuRw1m" width="700" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
];

const cartiNummers = [
  '<iframe src="https://open.spotify.com/embed/track/1s9DTymg5UQrdorZf43JQm" width="700" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
  '<iframe src="https://open.spotify.com/embed/track/1e1JKLEDKP7hEQzJfNAgPl" width="700" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
  '<iframe src="https://open.spotify.com/embed/track/2BJSMvOGABRxokHKB0OI8i" width="700" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
];

const spotifyEmbeds = [
  '<iframe src="https://open.spotify.com/embed/track/1s9DTymg5UQrdorZf43JQm" width="700" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
];

function toegangOphalen() {
  fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        "ZWJiODBkZDgyMjE1NDk5NTk0NTBkNThkZGFiMmYzNDI6YWViMGViN2ZjZDMyNGNlN2E3MjE2YzkxNDUzMzkzMjA",
    },
    body: "grant_type=client_credentials",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}

artiest1.addEventListener("click", function () {
  let geklikteArtiest = "3Rq3YOF9YG9YfCWD4D56RZ";
  console.log("Geklikte artiest:", geklikteArtiest);
  artiestNummerOphalen(geklikteArtiest);
});

artiest2.addEventListener("click", function () {
  let geklikteArtiest = "699OTQXzgjhIYAHMy9RyPD?si=aAu1LwlTQeu-XbJOyDpcwA";
  console.log("Geklikte artiest:", geklikteArtiest);
  artiestNummerOphalen(geklikteArtiest);
});
function artiestNummerOphalen(geklikteArtiest) {
  let nujabesIndex = 1;
  let cartiIndex = 1;
  const apiArtiestUrl = `https://api.spotify.com/v1/artists/${geklikteArtiest}`;

  fetch(apiArtiestUrl, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer " +
        "BQA9YFwV28F4GEuR5k0JQrDDFHKkXY_W8fRgqtHYGeeq-VItiz616IVPb8wRhSIaF8hVlFQx-g3P1e_WMrm149LDYmesn-plP-miZerTUAmWDkNiR2U",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      artiestNaam.textContent = data.name + " - Genre: " + data.genres[0];
      if (data.name == "Nujabes") {
        embed.innerHTML = nujabesNummers[0];
        nummerNieuw.addEventListener("click", function () {
          embed.innerHTML = nujabesNummers[nujabesIndex];
          nujabesIndex++;
          if (nujabesIndex == nujabesNummers.length) {
            nujabesIndex = 0;
          }
        });
      } else if (data.name == "Playboi Carti") {
        embed.innerHTML = cartiNummers[0];
        nummerNieuw.addEventListener("click", function () {
          embed.innerHTML = cartiNummers[cartiIndex];
          cartiIndex++;
          if (cartiIndex == cartiNummers.length) {
            cartiIndex = 0;
          }
        });
      }
    })
    .catch((error) => console.error("Error:", error));
}

artiestenLijstItems.forEach(function (lijstItem) {
  lijstItem.addEventListener("click", function () {
    artiestDiv.style.display = "none";
    artiestKiesTekst.style.display = "none";
    artiestNieuw.style.display = "block";
    nummerNieuw.style.display = "block";
    artiestNaam.style.display = "flex";
    embed.style.display = "flex";
  });
});

artiestNieuw.addEventListener("click", function () {
  artiestDiv.style.display = "flex";
  artiestKiesTekst.style.display = "flex";
  artiestNieuw.style.display = "none";
  nummerNieuw.style.display = "none";
  artiestNaam.style.display = "none";
  embed.style.display = "none";
});
