# Belly Button Biodiversity - Plot.ly

In this homework exercise, I will practice building an ineteractive page using javascript and plot.ly.

## Plotly
1. Use the D3 library to read in samples.json.
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


I will create a function to display the bar chart, bubble chart, and metadata; and nest this function into init() and optionChange() to reflect the event listener. Each time when I trigger the event by selecting an item from dropdown menu, new displays will be populated accordingly with the correct filtered information.
