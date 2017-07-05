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
console.log(sumAll([5, 10]));
