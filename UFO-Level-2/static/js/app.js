// from data.js
var tableData = data;

// YOUR CODE HERE!

// Load whole dataset as default upon loading page
let tab = d3.select('.table')

tableData.forEach((entry) => {
    let new_row = tab.append('tr');
    Object.entries(entry).forEach(([key, value]) => {
        let cell = new_row.append("td").attr('id','ufo_event');
        cell.text(value);
    });
});

// listening for click on the search button
let button = d3.select('#filter-btn')
button.on("click", function() {
    d3.selectAll('#ufo_event').remove();
    let filter_type = d3.select('#selFilter').node().value;
    let userInput = d3.select('#datetime');
    let userFilter = userInput.property('value');
    function chooseData(filter_type){
        switch(filter_type){
            case "datetime":
                return tableData.filter(entry => entry.datetime === userFilter);
              case "city":
                return tableData.filter(entry => entry.city === userFilter);
              case "country":
                return tableData.filter(entry => entry.country === userFilter);
              case "state":
                return tableData.filter(entry => entry.state === userFilter);
              case "shape":
                return tableData.filter(entry => entry.shape === userFilter);
              default:
                return tableData.filter(entry => entry.filter_type === userFilter);
          }
        }
    let filtered_table = chooseData(filter_type);
    let tab = d3.select('.table');

    filtered_table.forEach((entry) => {
        let new_row = tab.append('tr');
        Object.entries(entry).forEach(([key, value]) => {
            let cell = new_row.append("td").attr('id','ufo_event');
            cell.text(value);
        });
    });
});

// listening for hitting enter on the page
document.addEventListener('submit', function(event) {
    event.preventDefault();
    d3.selectAll('#ufo_event').remove()
    d3.selectAll('#ufo_event').remove();
    let filter_type = d3.select('#selFilter').node().value;
    let userInput = d3.select('#datetime');
    let userFilter = userInput.property('value');
    function chooseData(filter_type){
        switch(filter_type){
            case "datetime":
                return tableData.filter(entry => entry.datetime === userFilter);
              case "city":
                return tableData.filter(entry => entry.city === userFilter);
              case "country":
                return tableData.filter(entry => entry.country === userFilter);
              case "state":
                return tableData.filter(entry => entry.state === userFilter);
              case "shape":
                return tableData.filter(entry => entry.shape === userFilter);
              default:
                return tableData.filter(entry => entry.filter_type === userFilter);
          }
        }
    let filtered_table = chooseData(filter_type);
    let tab = d3.select('.table');

    filtered_table.forEach((entry) => {
        let new_row = tab.append('tr');
        Object.entries(entry).forEach(([key, value]) => {
            let cell = new_row.append("td").attr('id','ufo_event');
            cell.text(value);
        });
    });
});

