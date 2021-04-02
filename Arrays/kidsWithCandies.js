/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
	const maxInArray = findHighestInArray(candies);
	
	for(let i = 0; i < candies.length; i++) {
		if(candies[i] + extraCandies >= maxInArray) {
			candies[i] = true;
		} else {
			candies[i] = false;
		}
	}

	function findHighestInArray(candies) {
		let maxSoFar = Number.MIN_SAFE_INTEGER;
		for(let i=0; i<candies.length; i++) {
			if(candies[i] > maxSoFar) {
				maxSoFar = candies[i];
			}
		}

		return maxSoFar
	}

	return candies;
};

const candies = [2,3,5,1,3];
let extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));

const candies2 = [4,2,1,1,2];
extraCandies = 1;
console.log(kidsWithCandies(candies2, extraCandies));

const candies3 = [12,1,12];
extraCandies = 10
console.log(kidsWithCandies(candies3, extraCandies));

const candies4 = [2,8,7];
extraCandies = 1
console.log(kidsWithCandies(candies4, extraCandies));