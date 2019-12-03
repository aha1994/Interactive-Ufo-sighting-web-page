// from data.js
var tableData = data;

// YOUR CODE HERE!

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
    let userInput = d3.select('#datetime');
    let userDate = userInput.property('value');
    let filtered_table = tableData.filter(entry => entry.datetime === userDate);
    let tab = d3.select('.table')

    filtered_table.forEach((entry) => {
        let new_row = tab.append('tr');
        Object.entries(entry).forEach(([key, value]) => {
            let cell = new_row.append("td");
            cell.text(value);
        });
    });
});

// listening for hitting enter on the page
document.addEventListener('submit', function(event) {
    event.preventDefault();
    d3.selectAll('#ufo_event').remove()
    let userInput = d3.select('#datetime');
    let userDate = userInput.property('value');
    
    let filtered_table = tableData.filter(entry => entry.datetime === userDate);
    let tab = d3.select('.table')

    filtered_table.forEach((entry) => {
        let new_row = tab.append('tr');
        Object.entries(entry).forEach(([key, value]) => {
            let cell = new_row.append("td");
            cell.text(value);
        });
    });

});
