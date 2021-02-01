/* 1. Use the D3 library to read in samples.json.
   2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in an individual.
   - Use samples_values as the values for the bar chart.
   - Use otu_ids as the labels for the bar chart.
   - Use otu_labels as the hovertext for the chart.
   3. Create a bubble chart that displays each samlpe.
   - Use otu_ids for the x values.
   - Use sample_values for the y values.
   - Use otu_ids for the marker colors.
   - Use otu_labels for the text values.
   4. Display the sample metadat, i.e., an individual's demographic information.
   5. Display each key-value pair from the metadata JSON object somewhere on the page.
   6. Update all of the plots any time that a new sample is selected.
  */


// Build functions to display metadata and charts
// Fetch the JSON data and console log it
d3.json("samples.json").then(function(data) {
  console.log(data);
});






// Create a function to build barchart and bubble chart
function buildCharts(sample) {
  d3.json("samples.json").then(function(data){
    var x_axis = data.otu_ids;
    var y_axis = data.sample_values;
    var 

  });

}
// Bar Chart
var trace1 = {

};

var data = [trace1];

var layout = {
  title: "The Top 10 OTUs Found",
  xaxis: {},
  yaxis: {}
};

Plotly.newPlot("bar", data, layout);


// Bubble Chart
var trace2 = {

};

var data2 = [trace2];

var layout2 = {
  title: " ",
  xaxis: { title: " "},
  yaxis: { title: " "}
};

Plotly.newPlot("bubble", data2, layout2);





// Dropdown menu to select ID
// Listen to events

// Filter Individuals
function filterIndividual() {
  return samples.names ===  " ";
}
// Display demographic info and metadata