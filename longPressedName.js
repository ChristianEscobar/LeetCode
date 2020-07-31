/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
	let namePosTracker = 0;
	let typedPosTracker = 0;
	let expectedChar = name[0];
	let previousChar = expectedChar;

	while (namePosTracker < name.length || typedPosTracker < typed.length) {
		if (typed[typedPosTracker] === expectedChar) {
			previousChar = expectedChar;
			namePosTracker++;
			typedPosTracker++;
			expectedChar = name[namePosTracker];
		} else if (typed[typedPosTracker] === previousChar) {
			typedPosTracker++;
		} else {
			return false;
		}
	}

	return true;
};

let name = 'alex';
let typed = 'aaleex';
console.log(isLongPressedName(name, typed)); // true

name = 'saeed';
typed = 'ssaaedd';
console.log(isLongPressedName(name, typed)); // false

name = 'leelee';
typed = 'lleeelee';
console.log(isLongPressedName(name, typed)); // true, using a Set will cause this to fail

name = 'kikcxmvzi';
typed = 'kiikcxxmmvvzz';
console.log(isLongPressedName(name, typed)); // false
