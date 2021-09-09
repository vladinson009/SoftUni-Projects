function fancyBarcodes(input) {
    let pattern = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
    let digitPattern = /[0-9]/g;
    let n = Number(input.shift());
    for (let i = 0; i < n; i++) {
        let group = '';
        let match = pattern.exec(input.shift());
        if (match != null) {

            let product = match[1];
            let now = product.match(digitPattern)
            if (now != null) {
                group = now.join('');
            } else {
                group = '00'
            }
            console.log(`Product group: ${group}`);
        } else {
            console.log('Invalid barcode');
        }

    }
}
fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"
]);