function fishTank(input) {

    const length = Number(input[0]);
    const width = Number(input[1]);
    const height = Number(input[2]);
    const percentAmount = Number(input[3]);

    const volume = length * width * height;
    const totalLiters = volume * 0.001;
    const percent = percentAmount * 0.01;
    const realLiters = totalLiters * (1 - percent);

    console.log(realLiters);
}
fishTank(["85", "75", "47", "17"])

fishTank(["105", "77", "89", "18.5"])