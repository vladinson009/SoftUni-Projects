function cutAndReverse(text) {

    let middle = text.length / 2;
    let firstHalf = text.slice(0, middle);
    let secondHalf = text.slice(middle)

    console.log(firstHalf.split('').reverse().join(''));
    console.log(secondHalf.split('').reverse().join(''));

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');