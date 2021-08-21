function barcodeGenerator2(input) {

    let firstRow = Number(input[0]);
    let secondRow = Number(input[1]);

    let printLine = '';
    let f1 = Math.trunc(firstRow / 1000);
    let f2 = Math.trunc(firstRow / 100 % 10);
    let f3 = Math.trunc(firstRow / 10 % 10);
    let f4 = Math.trunc(firstRow % 10);
    let s1 = Math.trunc(secondRow / 1000);
    let s2 = Math.trunc(secondRow / 100 % 10);
    let s3 = Math.trunc(secondRow / 10 % 10);
    let s4 = Math.trunc(secondRow % 10);

    for (let index0 = f1; index0 <= s1; index0++) {
        for (let index1 = f2; index1 <= s2; index1++) {
            for (let index2 = f3; index2 <= s3; index2++) {
                for (let index3 = f4; index3 <= s4; index3++) {
                    if (index0 % 2 !== 0 && index1 % 2 !== 0 && index2 % 2 !== 0 && index3 % 2 !== 0) {
                        printLine += `${index0}${index1}${index2}${index3} `;
                    }
                }
            }
        }
    }
    console.log(printLine);
}

barcodeGenerator2(["2345",
    "6789"
])

function barcodeGenerator(input) {

    let firstRow = input[0];
    let secondRow = input[1];

    let printLine = '';
    let f1 = Number(firstRow[0]);
    let f2 = Number(firstRow[1]);
    let f3 = Number(firstRow[2]);
    let f4 = Number(firstRow[3]);
    
    let s1 = Number(secondRow[0]);
    let s2 = Number(secondRow[1]);
    let s3 = Number(secondRow[2]);
    let s4 = Number(secondRow[3]);

    for (let index0 = f1; index0 <= s1; index0++) {
        for (let index1 = f2; index1 <= s2; index1++) {
            for (let index2 = f3; index2 <= s3; index2++) {
                for (let index3 = f4; index3 <= s4; index3++) {
                    if (index0 % 2 !== 0 && index1 % 2 !== 0 && index2 % 2 !== 0 && index3 % 2 !== 0) {
                        printLine += `${index0}${index1}${index2}${index3} `;
                    }
                }
            }
        }
    }
    console.log(printLine);
}

barcodeGenerator(["2345",
    "6789"
])