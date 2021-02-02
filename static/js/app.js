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

d3.json("../samples.json").then(function(data) {
  console.log(data);
});


// Populate dropdown menu
// function populateDropdown() {
  d3.json("../samples.json").then(function(samplesJson){

    var select = document.getElementById("selDataset");
    var options = samplesJson["names"]
    for (var i = 0; i < options.length; i++) {
      var opt =options[i];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
    }
  })
// }
// populateDropdown();

// Initializes the page
function init() {
  d3.json("../samples.json").then(function(samplesJson) {
    var sampleId = samplesJson.names[0];
    // displayMetaData(sampleId);
    buildBarChart(sampleId);
    buildBubbleChart(sampleId);
  })
}


// Call optionChanged() when a change takes place to the DOM
function optionChanged(sampleId) {
  buildBubbleChart(sampleId);
  buildBarChart(sampleId);
}





function buildBubbleChart() {
  // Read in samples.json
  d3.json("../samples.json").then(function(samplesJson) {
    var x_axis = samplesJson["samples"][0]["otu_ids"];
    var y_axis = samplesJson["samples"][0]["sample_values"];
    var size = samplesJson["samples"][0]["sample_values"];
    var color = samplesJson["samples"][0]["otu_ids"];
    var texts = samplesJson["samples"][0]["otu_labels"];

    // console.log(x_axis);

    var bubble = {
      x: x_axis,
      y: y_axis,
      text: texts,
      mode: `markers`,
      marker: {
        size: size,
        color: color
      }
    };

    var data = [bubble];
    var layout = {
      title: "Belly Button Bacteria",
      xaxis: {title: "OTU ID"}
    };
    Plotly.newPlot("bubble", data, layout);
  });
};







function buildBarChart() {
  d3.json("../samples.json").then(function(samplesJson) {
    var x_axis = samplesJson["samples"][0]["sample_values"].slice(0,10);
    var y_axis = samplesJson["samples"][0]["otu_ids"].slice(0,10);
    var hoverText = samplesJson["samples"][0]["otu_labels"].slice(0,10);


    var bar = {
      x: x_axis,
      y: y_axis,
      text: hoverText,
      type: 'bar',
      orientation: 'h'
  };

    var data = [bar];

  Plotly.newPlot('bar', data);
  });
}

// dropdown menu create id filter
  // insert filtered id to grab the info we want
// metadata populate
// initialize page
  // first id
    //metadata
    //barchart
    //bubblechart
// option change
  // selected id
    //metadata
    //barchart
    //bubblechart



init();
// buildBarChart();
// buildBubbleChart();