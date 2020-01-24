  module.exports = {
    boolToString
}

function boolToString(arr) {
    const newArr = [];
    arr.forEach(t => {
        t.completed === 1 ? t.completed = true : t.completed = false;
        newArr.push(t)
    })

    return newArr
}