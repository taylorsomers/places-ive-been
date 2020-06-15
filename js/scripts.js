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

function Location(name, landmarks, seasonVisited, notes) {
  this.name = name;
  this.landmarks = landmarks;
  this.seasonVisited = seasonVisited;
  this.notes = notes;
}

  // End Location Business Logic

// End Business Logic

// UI Logic

$(document).ready(function() {

});

// End UI Logic