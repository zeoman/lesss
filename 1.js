var num = 33721;

function DigitsUmnojenie(num) {
	var digitWord = num.toString();
	var x = digitWord.charAt(digitWord.length - 1);

	for (var i = digitWord.length - 1; i >= 0; i--) {
		x *= digitWord.charAt(i);
	}

	return x;
}

num = DigitsUmnojenie(num);
console.log(num);

alert(Math.pow(num,3));