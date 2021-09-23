function addAndRemove(input) {
    let num = 1
    let intNum = [];
    for (let el of input) {
        if (el == 'add') {
            intNum.push(num);
        } else if (el == 'remove') {
            intNum.pop();
        }
        num++;
    }
    if (intNum.length > 0) {
        return intNum.join('\n');
    } else {
        return 'Empty'
    }
}

console.log(addAndRemove(['add',
    'add',
    'add',
    'add'
]));
console.log(addAndRemove(['remove',
    'remove',
    'remove'
]));