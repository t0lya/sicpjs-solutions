const { pair, head, tail } = require('./2.17.js')

function append(list1, list2) {
  return list1 === null ? list2 : pair(head(list1), append(tail(list1), list2))
}

function reverse(list) {
  return list === null
    ? null
    : append(reverse(tail(list)), pair(head(list), null))
}

console.log(reverse(pair(3267, pair(6, null))))
