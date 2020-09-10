function countPairs(pair) {
  const seenBefore = []

  function count(pair) {
    const extraCount = seenBefore.includes(pair) ? 0 : 1

    seenBefore.push(pair)

    return Array.isArray(pair)
      ? count(pair[0]) + count(pair[1]) + extraCount
      : 0
  }

  return count(pair)
}

const innerPair = [
  [3, null],
  [
    [6, null],
    [9, null]
  ]
]
const pair = [innerPair[0], innerPair[1]]

console.log(countPairs(pair))
