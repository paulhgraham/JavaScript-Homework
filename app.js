// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $stateInput = document.querySelector("#state")
var $searchBtn = document.querySelector("#search");

$searchBtn.addEventListener("click", handleSearchButtonClick);

var filteredUFO = dataSet;

// renderTable renders the filteredUFO to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  console.log("start render")

  for (var i = 0; i < filteredUFO.length; i++) {
    
    var sighting = filteredUFO[i];
    var fields = Object.keys(sighting);
    // Create a new row, increase the index
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) 
    
    {
      // Create a new cell for every field at set its inner text
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sighting[field];
    }
  }
}

function handleSearchButtonClick() {
  // Remove whitespace, lowercase the string
  var filterDate = $dateInput.value.trim();
  var filterState = $stateInput.value.trim().toLowerCase();

  if (filterDate.length != 0){
    filteredUFO = dataSet.filter(function(sighting) {
      var sightingDate = sighting.datetime;
       return sightingDate === filterDate;
         });
  }
  else {
    filteredUFO = dataSet
  }
  if (filterState.length != 0){
    filteredUFO = filteredUFO.filter(function(sighting) {
      var sightingState = sighting.state;
       return sightingState === filterState;
         });
  }
  else {
    filteredUFO = filteredUFO
  }
  renderTable();
}
renderTable();