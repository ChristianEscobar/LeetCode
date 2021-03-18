const lengthOfLongestSubstring = function(s) {
	if(s.length === 0) {
			return 0;
	}
	const sArray = s.split('');
	const substringBuilder = [];
	let longestLength = Number.MIN_SAFE_INTEGER;
	for(let i = 0; i < sArray.length; i++) {
			const char = sArray[i];
			if(substringBuilder.includes(char)) {
					let charIndex = substringBuilder.indexOf(char);
					substringBuilder.splice(charIndex, 1);
			}
			
			substringBuilder.push(char);
			longestLength = Math.max(longestLength, substringBuilder.length);
	}
	
	return substringBuilder.length;
};

console.log(lengthOfLongestSubstring('pwwkew'));