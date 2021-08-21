function substitute(input) {
    let k = Number(input[0]);
    let l = Number(input[1]);

    let m = Number(input[2]);
    let n = Number(input[3]);
    let counter = 0;
    for (let index0 = k; index0 <= 8; index0++) {
        for (let index1 = 9; index1 >= l; index1--) {
            for (let index2 = m; index2 <= 8; index2++) {
                for (let index3 = 9; index3 >= n; index3--) {
                    if (index0 % 2 === 0 && index2 % 2 === 0 && index1 % 2 !== 0 && index3 % 2 !== 0) {
                        if ('' + index0 + index1 === '' + index2 + index3) {
                            console.log('Cannot change the same player.');
                        } else {
                            console.log(`${index0}${index1} - ${index2}${index3}`);
                            counter++;
                        }
                        if (counter == 6) {
                            return;
                        }
                    }
                }
            }
        }
    }

}

substitute(["6",
"7",
"5",
"6"])