var beasts = ["Centaur", "Godzilla", "Mosura", "Minotaur", "Hydra", "Nessie"];

const search = beasts.indexOf("Godzilla"); //linear search like the one directly below
const search1 = beasts.findIndex(function (item) {
  return item === "Godzilla";
}); //linear search to find the index

const search2 = beasts.find(function (item) {
  return item === "Godzilla";
}); //linear search to find the value in a list

console.log(search2);
