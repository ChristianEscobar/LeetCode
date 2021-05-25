/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
function euclideanDistance(point1, point2) {
  const subtractXs = point1[0] - point2[0];
  const subtractYs = point1[1] - point2[1];

  const raiseXs = subtractXs ** 2;
  const raiseYs = subtractYs ** 2;

  const sum = raiseXs + raiseYs;
  const sqrt = Math.sqrt(sum);

  return sqrt;
}

const kClosest = function (points, k) {
  const result = [];
  const distances = [];

  if (points.length === 0) {
    return result;
  }

  points.forEach((point) => {
    const distance = euclideanDistance([0, 0], point);

    distances.push({ point, distance });
  });

  distances.sort((a, b) => a.distance - b.distance);

  for (let i = 0; i < k; i += 1) {
    const { point } = distances[i];
    result.push(point);
  }

  return result;
};

const points = [[1, 3], [-2, 2], [2, -2]];
const k = 2;
console.log(kClosest(points, k));
