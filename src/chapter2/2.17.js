function pair(a, b) {
  return [a, b]
}

function head(pair) {
  return pair[0]
}

function tail(pair) {
  return pair[1]
}

function last(list) {
  return tail(list) === null ? head(list) : last(tail(list))
}

console.log(last(pair(3434, pair(652, pair(8345, pair(3267, pair(6, null)))))))

module.exports = {
  pair,
  head,
  tail,
  last
}
