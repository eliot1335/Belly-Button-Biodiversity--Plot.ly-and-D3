// Fetch the JSON data and console log it
d3.json("https://eliot1335.github.io/samples.json").then(function(data) {
  console.log(data);
});

// // Promise Pending
const dataPromise = d3.json("https://eliot1335.github.io/samples.json");
console.log("Data Promise: ", dataPromise);