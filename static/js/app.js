// Initializes the page
function init() {
  d3.json("./samples.json").then(function(jsonData) {

    // Populate dropdown
    var select = document.getElementById("selDataset");
    var options = jsonData["names"]
    for (var i = 0; i < options.length; i++) {
      var opt =options[i];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
    };

    var sampleId = jsonData.names[0];
    buildDisplays(sampleId);
  })
}


// Call optionChanged() when a change takes place to the DOM
function optionChanged(sampleId) {
  buildDisplays(sampleId);
}



function buildDisplays(sampleId) {
  // Read in json file
  d3.json("./samples.json").then(function(jsonData) {
    var sFilter = jsonData["samples"].filter(row => row["id"] == sampleId);
    var mFilter = jsonData["metadata"].filter(row => row["id"] == sampleId);

    // Set variables for bubble chart
    var xBubble = sFilter[0].otu_ids;
    var yBubble = sFilter[0].sample_values;
    var sizeBubble = sFilter[0].sample_values;
    var colorBubble = sFilter[0].otu_ids;
    var textBubble = sFilter[0].otu_labels;

    // Set bubble chart parameters
    var bubble = {
      x: xBubble,
      y: yBubble,
      text: textBubble,
      mode: "markers",
      marker: {
        size: sizeBubble,
        color: colorBubble,
        colorscale: "Earth"
      }
    };

    // var data1 = bubble;
    var layout1 = {
      title: "Belly Button Biodiversity",
      xaxis: {title: "OTU ID"}
    };

    var dataBubble = [bubble];

    // Plot bubble Chart
    Plotly.newPlot("bubble", dataBubble, layout1);

    //==========================================
    // Set Variables for Bar Chart
    var xBar = sFilter[0].sample_values.slice(0, 10).reverse();
    var yBar = sFilter[0].otu_ids.slice(0, 10).reverse().map(id => `OTU ${id}`);
    var textBar = sFilter[0].otu_labels.slice(0, 10).reverse();
   

    // Set bubble chart parameters
    var bar = {
      x: xBar,
      y: yBar,
      text: textBar,
      type: 'bar',
      orientation: 'h'
    };

    var layout2 = {
      title: "Top 10 OTUs Found",
      xaxis: {title: "Values"},
      yaxis: {title: "OTU Labels"}
    };

    var dataBar = [bar];

    // Plot bubble Chart
    Plotly.newPlot("bar", dataBar, layout2);


    // ======================================
    // Display metaData
    var metadataPanel = d3.select("#sample-metadata");
    metadataPanel.html("");
    Object.entries(mFilter[0]).forEach(([key, value]) => {
      metadataPanel.append("p").text(`${key}: ${value}`);
    });
  });
}

init();