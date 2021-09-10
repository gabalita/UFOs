// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create table
function buildTable(data) {
  tbody.html("");
  data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

function handleClick() {
  let filterNames = ["datetime","city","country","state","shape"];
  
  filterNames.forEach(function (filterName) {
    let filter = d3.select("#" + filterName).property("value");
    let filteredData = tableData;

    if (filter) {
      filteredData = filteredData.filter((row) => row[filterName] === filter);
    }
  });

  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);
