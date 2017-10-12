// Valid US Number

function telephoneCheck(str) {
  // Good luck!
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/ ;
  return regex.test(str);
}

telephoneCheck("555-555-5555");

// Record Collection

var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if (!collection[id].hasOwnProperty(prop)) {
    collection[id][prop] = value;
  }

  return collection[id];
}

console.log(updateRecords(5439, "artist", "ABBA"));
