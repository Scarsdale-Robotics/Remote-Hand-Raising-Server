let lastId = 0

function next() {
    return lastId++
}

exports.next = next