// // Top down dynamic solution.  Cache the values
// // as we compute them
// const coins = [10, 6, 1];

// function process(c, cache) {
//   // Return the value if it's in the cache
//   if (cache[c] >= 0) {
//     return cache[c];
//   }

//   if (c === 0) {
//     return c;
//   }

//   let minCoins = Number.MAX_SAFE_INTEGER;

//   // Find the best coin
//   coins.forEach((coin) => {
//     if (c - coin >= 0) {
//       const currMinCoins = process(c - coin, cache);
//       if (currMinCoins < minCoins) {
//         minCoins = currMinCoins;
//       }
//     }
//   });

//   // eslint-disable-next-line no-param-reassign
//   cache[c] = minCoins + 1;
//   return cache[c];
// }

// function makeChange(c) {
//   const cache = [];
//   // Initialize cache
//   for (let i = 1; i < c + 1; i += 1) {
//     cache[i] = -1;
//   }
//   return process(c, cache);
// }

function makeChange(c) {
  const coins = [10, 6, 1];

  function process(amt) {
    if (amt === 0) {
      return 0;
    }

    let minCoins = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < coins.length; i += 1) {
      const curCoin = coins[i];

      if (amt - curCoin >= 0) {
        const remain = process(amt - curCoin);
        if (remain < minCoins) {
          minCoins = remain;
        }
      }
    }

    minCoins += 1;
    return minCoins;
  }

  return process(c);
}

console.log(makeChange(13));
