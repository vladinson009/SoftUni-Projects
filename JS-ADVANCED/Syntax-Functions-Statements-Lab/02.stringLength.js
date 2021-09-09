function stringLength(first, second, third) {
    let totalLength = first.length + second.length + third.length;
    let avgLength = Math.floor(totalLength / 3)

    return `${totalLength}\n${avgLength}`

}
console.log(stringLength('chocolate', 'ice cream', 'cake'));