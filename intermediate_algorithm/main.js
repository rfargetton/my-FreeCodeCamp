// Sum All Numbers in a Range

function sumAll(arr) {
  var max = Math.max(...arr);
  var min = Math.min(...arr);
	var count = 0;
	for (var i = min; i <= max; i++) {
		count += i;
	}
  return count;
}
sumAll([5, 10]);

// Diff Two Arrays

function diffArray(arr1, arr2) {
  var newArr1 = arr1.filter(function(value){
		return arr2.indexOf(value) === -1;
	});
  var newArr2 = arr2.filter(function(value){
		return arr1.indexOf(value) === -1;
	});
	return newArr1.concat(newArr2);
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

// Roman Numeral Converter

function convertToRoman(num) {
  var romans = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"].reverse();
  var numerals = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000].reverse();

  var length = numerals.length;
  var roman= "";
  for (var i = 0; i <length; i++) {
    while (numerals[i]<=num) {
      roman = roman + romans[i];
      num = num-numerals[i];
    }
  }
  return roman;
}
convertToRoman(891);

// Wherefore art thou

function whatIsInAName(collection, source) {
	var arr = [];
	var keys = Object.keys(source);
  arr = collection.filter(function(object){
		return keys.every(function(property){
			return object.hasOwnProperty(property) && object[property] === source[property];
		});
	});
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// Search and Replace

function myReplace(str, before, after) {
	var strSplit;
	if (before[0] === before[0].toUpperCase()){
		var newAfter = after.split("");
		newAfter.splice(0, 1, newAfter[0].toUpperCase());
		newAfter = newAfter.join("");
		strSplit = str.replace(before, newAfter);
	} else {
		strSplit = str.replace(before, after);
	}
	return strSplit;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");

// Pig Latin

function translatePigLatin(str) {
	var regex = /[aeiouy]/gi;
	var newStr;
	if (str[0].match(regex)){
		// console.log("first letter is a vowel");
		newStr = str + "way";
	} else {
		// console.log("first letter is a consonant");
		var vowelI = str.indexOf(str.match(regex)[0]) ;
		newStr = str.split("");
		var suffix = newStr.splice(0, vowelI);
		suffix = suffix.join("");
		newStr.push(suffix + "ay");
		newStr = newStr.join("");
	}
	return newStr;
}

translatePigLatin("glove");

// DNA Pairing

function pairElement(str) {
	var lookup = {
		"A" : "T",
		"T" : "A",
		"G" : "C",
		"C" : "G"
	};
	var dnaArray = [];
	for (let dna of str.split("")) {
		dnaArray.push([dna, lookup[dna]]);
	}
	return dnaArray;
}

pairElement("GCGTA");

// Missing letters

function fearNotLetter(str) {
	var count = str.charCodeAt(0);

	for (var i = 0; i < str.length; i++) {
		if(str.charCodeAt(i) !== (count + i)){
			return String.fromCharCode(count + i);
		}
	}
}

fearNotLetter("abcd");

// Boo who

function booWho(bool) {
  return typeof bool === "boolean" ;
}

booWho(true);

// Sorted Union

function uniteUnique(arr) {
	var args = Array.from(arguments);
	var flatened = args.reduce(
		function(a, b){
				return a.concat(b.filter(function(element){
					return a.indexOf(element) == -1 ;
				}));
	}, [] );

  return flatened;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Convert HTML Entities

function convertHTML(str) {
	var lookup = {
		"&" : "&amp;",
		"<" : "&​lt;",
		">" : "&gt;",
		'"' : "&​quot;",
		"'" : "&apos;"
	};

	return str.split("").map(function(chr){
		if (lookup[chr]) {
			return lookup[chr];
		} else {
			return chr;
		}
	}).join("");
}

convertHTML("><");

// Spinal Tap Case

function spinalCase(str) {

	str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

	return str.split(/\s|_/g).join("-").toLowerCase() ;
}

spinalCase('This Is Spinal Tap');

// Sum All Odd Fibonacci Numbers

function sumFibs(num) {
	var a = 0;
	var b = 0;
	var fib = 1;
	var sum = 0;
	while (fib <= num) {
		if (fib % 2 !== 0){
			sum += fib ;
		};
		a = b;
		b = fib;
		fib = a + b;
	}
  return sum;
}

sumFibs(1000);

// Sum All Primes

function sumPrimes(limit) {

	// create a function that checks if an integer is prime
	function isPrime(num){
		for (var i = 2; i < num; i++) {
			if (num%i === 0) {
				return false;
			}
		}
	  return num > 1;
	}
	var arr = Array.from({length: limit+1}, (v,k) => k).slice(2);
  var filtered = arr.filter( number => isPrime(number) );
	return filtered.reduce( (a, b) => a+b);

}

sumPrimes(977);

// Smallest Common Multiple

function smallestCommons(arr) {
  var array = arr.sort((a, b) => a - b);
  var max = array[1];
	var fullArray = Array.from({length: max+1}, (v,k) => k).slice(array[0]);
  var mult = max;

  function isDivisible(element) {
    return mult%element===0;
  }

  while(!fullArray.every(isDivisible)){
    mult += max;
  }
  return mult;
}

smallestCommons([5, 1]);

// Finders Keepers

function findElement(arr, func) {
  return arr.find(func);
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });

// Drop It

function dropElements(arr, func) {
  var index = arr.indexOf(arr.find(func));
  if(index<0){
    return [];
  } else {
    return arr.slice(index);
  }
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});

// Steamroller

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var array = [];
  function flatten(element){
    if (!Array.isArray(element)) {
      array.push(element);
    } else {
      element.map(flatten);
    }
  }
  arr.map(flatten);
  return array;
}

steamrollArray([1, [2], [3, [[4]]]]);

//  Binary Agent

function binaryAgent(str) {
  var lookup = [128, 64, 32, 16, 8, 4, 2, 1];

  var newarr = str.split(" ").map(element => {
    var count = 0;
    for (var i = 0; i < element.length; i++) {
      count += (element[i])*(lookup[i]);
    }
    return count;
  });

  return String.fromCharCode(...newarr);

}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// Everything Be True

function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(elem => elem[pre]);
}

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat");

// Arguments Optional

function addTogether() {
  var args = Array.from(arguments);

  if (args.length == 2) {
    if (!args.every(elem=> typeof elem === 'number')) {
      return undefined;
    } else {
      return args.reduce((a, b)=> a+b);
    }
  }

  if (args.length == 1) {
    if (typeof args[0] === 'number') {
      var a = args[0];
      return function(b){
        if (typeof b ==="number"){
          return a+b;
        } else {
          return undefined;
        }
      };
    } else {
      return undefined;
    }
  }

}

addTogether(2)([3]);
