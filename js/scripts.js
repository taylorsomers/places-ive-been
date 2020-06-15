// Business Logic:

  // PlacesIveBeen Business Logic:

function PlacesIveBeen() {
  this.locations = [];
  this.currentId = 0;
}

PlacesIveBeen.prototype.addLocation = function(location) {
  location.id = this.assignId();
  this.locations.push(locations);
}

PlacesIveBeen.prototype.assignId = function() {
  this.currentId++;
  return this.currentId;
}

  // End PlacesIveBeen Business Logic

  // Location Business Logic

// function Location(name, landmarks, seasonVisited, notes) {
//   this.name = name;
//   this.landmarks = [landmarks];
//   this.seasonVisited = seasonVisited;
//   this.notes = notes;
// }

// Location.prototype.formatLocation = function() {
//   arrayLocation = [];
//   arrayLocation.push(name, landmarks, seasonVisited, notes);
// }

  // End Location Business Logic

// End Business Logic

// UI Logic

$(document).ready(function() {
  // let listOfPlaces = new PlacesIveBeen();
  // let armenia = new Location("Armenia", ["Khor Virap Monastery", "Yerevan"], "Summer 2018", "Visited for two weeks and drove around the country with my friend Michael.");
  // let belgrade = new Location("Belgrade", ["Oskar Restaurant", "Tesla Museum"], "Spring 2010", "Visited while traveling across the Balkans with my college friend Tyler.");
  // let stPetersburg = new Location("St Petersburg, Russia", ["Church on Spilt Blood", "The Hermitage Palace", "Peterhof Palace", "St Isaac's Cathedral"], "Spring 2003", "Visited with my mother and stepfather while on a tour of the Baltic and Scandinavia.");
  // let locationsToAdd = [armenia,belgrade,stPetersburg];
  // locationsToAdd.map(function(element) {
  //   listOfPlaces.addLocation(element);
  // });
  $("button#stp").click(function(event){
    (event).preventDefault();
    // let locationDisplay = formatLocation(stPetersburg);
    // locationDisplay.forEach(function(element) {
      $("#info").text(element);
    });
  });
});

// End UI Logic